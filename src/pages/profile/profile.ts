import Block from "../../core/Block";
import { PAGES, navigate } from "../../core/navigate";
import template from "./profile.hbs?raw";

interface IProps {}

export class ProfilePage extends Block<IProps> {
  constructor() {
    super({
      handleEditProfile: (event: Event) => {
        event.preventDefault();
        navigate(PAGES.EDIT_PROFILE);
      },
      handleEditPassword: (event: Event) => {
        event.preventDefault();
        navigate(PAGES.EDIT_PASSWORD);
      },
      handleLogout: (event: Event) => {
        event.preventDefault();
        navigate(PAGES.LOGIN);
      },
      handleBackClick: () => {
        navigate(PAGES.CHATS);
      },
    });
  }

  protected render(): string {
    return template;
  }
}
