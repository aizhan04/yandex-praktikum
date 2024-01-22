import { InputField } from "../../components";
import Block from "../../core/Block";
import { PAGES, navigate } from "../../core/navigate";
import template from "./login.hbs?raw";
import * as validators from "../../utils/validate";

interface IProps {}

type TRef = {
  login: InputField;
  password: InputField;
};

export class LoginPage extends Block<IProps, TRef> {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
      },
      handleLogin: (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();
        if (!login || !password) return;
        console.log({
          login,
          password,
        });
        navigate(PAGES.CHATS);
      },
      handleRegister: (event: Event) => {
        event.preventDefault();
        console.log("hskdfhskdjf");
        navigate(PAGES.REGISTRATION_PAGE);
        console.log("22222");
      },
    });
  }

  protected render(): string {
    return template;
  }
}
