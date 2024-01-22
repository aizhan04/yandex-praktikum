import * as Pages from "../pages";

// eslint-disable-next-line no-shadow
export enum PAGES {
  LOGIN = "login",
  CHATS = "chats",
  PROFILE_PAGE = "profile",
  EDIT_PASSWORD = "edit-password",
  EDIT_PROFILE = "edit-profile",
  REGISTRATION_PAGE = "registration",
  NOT_FOUND = "404",
  INTERNAL_SERVER_ERROR = "500",
}

type TPages = {
  [key in PAGES]: any;
};

const pages: TPages = {
  [PAGES.LOGIN]: Pages.LoginPage,
  [PAGES.CHATS]: Pages.ChatsPage,
  [PAGES.EDIT_PASSWORD]: Pages.EditPasswordPage,
  [PAGES.EDIT_PROFILE]: Pages.EditProfilePage,
  [PAGES.PROFILE_PAGE]: Pages.ProfilePage,
  [PAGES.REGISTRATION_PAGE]: Pages.RegistrationPage,
  [PAGES.NOT_FOUND]: Pages.Error404Page,
  [PAGES.INTERNAL_SERVER_ERROR]: Pages.Error500Page,
};

export function navigate(page: string): void {
  const app = document.getElementById("app");

  const Component = pages[page as PAGES];
  const component = new Component({});
  app?.replaceChildren(component.getContent()!);
}
