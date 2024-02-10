import { ErrorText, InputField } from "../../components";
import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import template from "./login.hbs?raw";
import * as validators from "../../utils/validate";
import { signin } from "../../services/auth";

interface IProps {}

type TRef = {
  login: InputField;
  password: InputField;
  errorText: ErrorText;
};

export class LoginPage extends Block<IProps, TRef> {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
      },
      handleLogin: async (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();
        if (!login || !password) return;
        try {
          await signin({
            login,
            password,
          });
        } catch (error: any) {
          this.refs.errorText.setProps({ error: error.message });
        }
      },
      handleRegister: (event: Event) => {
        event.preventDefault();
        router.go(PAGES.REGISTER);
      },
    });
  }

  protected render(): string {
    return template;
  }
}
