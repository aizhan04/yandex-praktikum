import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import template from "./profile.hbs?raw";
import { logout } from "../../services/auth";

interface IProps {}

export class ProfilePage extends Block<IProps> {
  constructor() {
    super({
      handleEditProfile: (event: Event) => {
        event.preventDefault();
        router.go(PAGES.EDIT_PROFILE);
      },
      handleEditPassword: (event: Event) => {
        event.preventDefault();
        router.go(PAGES.EDIT_PASSWORD);
      },
      handleLogout: async (event: Event) => {
        event.preventDefault();
        try {
          await logout();
          router.go(PAGES.LOGIN);
        } catch (error) {
          console.log(error);
        }
      },
      handleBackClick: () => {
        router.back();
      },
    });
  }

  protected render(): string {
    return template;
  }
}
