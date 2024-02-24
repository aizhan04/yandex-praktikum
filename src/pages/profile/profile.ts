import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import template from "./profile.hbs?raw";
import { logout } from "../../services/auth";
import { UserDTO } from "../../api/type";
import { connect } from "../../utils/connect";

interface IProps {
  user: UserDTO;
  handleChangeProfile: (event: Event) => void;
  handleChangePassword: (event: Event) => void;
  handleLogout: (event: Event) => void;
  handleBackClick: () => void;
}

export class ProfilePage extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      handleChangeProfile: (event: Event) => {
        event.preventDefault();
        router.go(PAGES.EDIT_PROFILE);
      },
      handleChangePassword: (event: Event) => {
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

export default connect(({ user }) => ({ user }))(ProfilePage);
