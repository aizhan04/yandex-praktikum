import { InputField } from "../../components";
import Block from "../../core/Block";
import { PAGES, navigate } from "../../core/navigate";
import template from "./registration.hbs?raw";
import * as validators from "../../utils/validate";

interface IProps {}

type TRef = {
  email: InputField;
  login: InputField;
  first_name: InputField;
  second_name: InputField;
  phone: InputField;
  password: InputField;
  repeat_password: InputField;
};

export class RegistrationPage extends Block<IProps, TRef> {
  constructor() {
    super({
      validate: {
        email: validators.email,
        login: validators.login,
        first_name: validators.first_name,
        second_name: validators.second_name,
        phone: validators.phone,
        password: validators.password,
        repeat_password: validators.password,
      },
      handleLogin: (event: Event) => {
        event.preventDefault();
        navigate(PAGES.LOGIN);
      },
      handleRegister: (event: Event) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const first_name = this.refs.first_name.value();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const second_name = this.refs.second_name.value();
        const phone = this.refs.phone.value();
        const password = this.refs.password.value();
        // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
        const repeat_password = this.refs.repeat_password.value();
        if (
          !email ||
          !login ||
          // eslint-disable-next-line camelcase
          !first_name ||
          // eslint-disable-next-line camelcase
          !second_name ||
          !phone ||
          !password ||
          // eslint-disable-next-line camelcase
          !repeat_password
        )
          return;
        console.log({
          email,
          login,
          // eslint-disable-next-line camelcase
          first_name,
          // eslint-disable-next-line camelcase
          second_name,
          phone,
          password,
          // eslint-disable-next-line camelcase
          repeat_password,
        });
        navigate(PAGES.CHATS);
      },
    });
  }

  protected render(): string {
    return template;
  }
}
