/* eslint-disable */
// @ts-nocheck
import * as Pages from "../pages";
import isEqual from "../utils/isEqual";
import { BlockConstructable } from "./registerComponent";

export enum PAGES {
  LOGIN = "/",
  REGISTER = "/sign-up",
  CHATS = "/messenger",
  PROFILE = "/settings",
  EDIT_PROFILE = "/change-profile",
  EDIT_PASSWORD = "/change-password",
  NOT_FOUND = "/404",
  INTERNAL_SERVER_ERROR = "/500",
}

type TPages = {
  [key in PAGES]: BlockConstructable<object, object>;
};

const pages: TPages = {
  [PAGES.LOGIN]: Pages.LoginPage,
  [PAGES.REGISTER]: Pages.RegistrationPage,
  [PAGES.CHATS]: Pages.ChatsPage,
  [PAGES.PROFILE]: Pages.ProfilePage,
  [PAGES.EDIT_PROFILE]: Pages.EditProfilePage,
  [PAGES.EDIT_PASSWORD]: Pages.EditPasswordPage,
  [PAGES.NOT_FOUND]: Pages.Error404Page,
  [PAGES.INTERNAL_SERVER_ERROR]: Pages.Error500Page,
};

function render(query, block) {
  const app = document.querySelector(query);
  app?.replaceChildren(block.getContent()!);
}

class Route {
  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  leave() {
    if (this._block) {
      const app = document.querySelector(this._props.rootQuery);
      app?.removeChild(this._block.getContent());
      this._block = null; // Delete the component
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render(query, block) {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    // Set up an event listener for changes in the address bar
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    // Trigger the route handling for the current pathname
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    let route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname) {
    // Push a new state to the history with the specified pathname
    this.history.pushState({}, "", pathname);
    // Handle the route change
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export const router = new Router("#app");

Object.entries(pages).forEach(([path, Page]) => {
  router.use(path, Page);
});
