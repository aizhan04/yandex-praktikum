import { InputField } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, navigate } from "../../../core/navigate";
import template from "./edit-profile.hbs?raw";
import * as validators from "../../../utils/validate";

interface IProps {}

type TRef = {
  first_name: InputField;
  second_name: InputField;
  display_name: InputField;
  login: InputField;
  email: InputField;
  phone: InputField;
};

export class EditProfilePage extends Block<IProps, TRef> {
  constructor() {
    super({
      validate: {
        first_name: validators.first_name,
        second_name: validators.second_name,
        display_name: validators.first_name,
        login: validators.login,
        email: validators.email,
        phone: validators.phone,
      },
      handleBackClick: () => {
        navigate(PAGES.PROFILE_PAGE);
      },
      handleSaveChangesClick: (event: Event) => {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const first_name = this.refs.first_name.value();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const second_name = this.refs.second_name.value();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const display_name = this.refs.display_name.value();
        const login = this.refs.login.value();
        const email = this.refs.email.value();
        const phone = this.refs.phone.value();
        if (
          // eslint-disable-next-line camelcase
          !first_name ||
          // eslint-disable-next-line camelcase
          !second_name ||
          // eslint-disable-next-line camelcase
          !display_name ||
          !login ||
          !email ||
          !phone
        )
          return;
        console.log({
          // eslint-disable-next-line camelcase
          first_name,
          // eslint-disable-next-line camelcase
          second_name,
          // eslint-disable-next-line camelcase
          display_name,
          login,
          email,
          phone,
        });
      },
    });
  }

  protected render(): string {
    return template;
  }
}
