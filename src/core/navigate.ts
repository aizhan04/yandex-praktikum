import * as Pages from "../pages";

const pages = {
  login: Pages.LoginPage,
  signIn: Pages.SignInPage,
  chats: Pages.ChatsPage,
  profile: Pages.ProfilePage,
  not_found: Pages.Error404Page,
  internal_error: Pages.Error500Page,
};

export function navigate(page: string) {
  const app = document.getElementById("app");

  // @ts-ignore
  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}
