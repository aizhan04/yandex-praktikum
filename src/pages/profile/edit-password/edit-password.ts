import { InputField } from "../../../components";
import Block from "../../../core/Block";
import { PAGES, router } from "../../../core/Router";
import template from "./edit-password.hbs?raw";
import * as validators from "../../../utils/validate";

interface IProps {}

type TRef = {
  oldPassword: InputField;
  newPassword: InputField;
  repeatNewPassword: InputField;
};

export class EditPasswordPage extends Block<IProps, TRef> {
  constructor() {
    super({
      validate: {
        oldPassword: validators.password,
        newPassword: validators.password,
        repeatNewPassword: validators.password,
      },
      handleBackClick: () => {
        router.go(PAGES.PROFILE);
      },
      handleSaveChangesClick: () => {
        const oldPassword = this.refs.oldPassword.value();
        const newPassword = this.refs.newPassword.value();
        const repeatNewPassword = this.refs.repeatNewPassword.value();
        if (!oldPassword || !newPassword || !repeatNewPassword) return;
        console.log({
          oldPassword,
          newPassword,
          repeatNewPassword,
        });
      },
    });
  }

  protected render(): string {
    return template;
  }
}
