import { ErrorText, InputField, SuccessText } from "../../../components";
import Block from "../../../core/Block";
import { router } from "../../../core/Router";
import template from "./edit-password.hbs?raw";
import * as validators from "../../../utils/validate";
import { changePassword } from "../../../services/user";

interface IProps {}

type TRef = {
  oldPassword: InputField;
  newPassword: InputField;
  repeatNewPassword: InputField;
  errorText: ErrorText;
  successText: SuccessText;
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
        router.back();
      },
      handleSaveChangesClick: async () => {
        const oldPassword = this.refs.oldPassword.value();
        const newPassword = this.refs.newPassword.value();
        const repeatNewPassword = this.refs.repeatNewPassword.value();
        if (!oldPassword || !newPassword || !repeatNewPassword) return;
        try {
          await changePassword({
            oldPassword,
            newPassword,
          });
          this.refs.errorText.setProps({ error: "Ошибка" });
          this.refs.successText.setProps({
            success: "Пароль изменен",
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          this.refs.errorText.setProps({ error: error.message });
        }
      },
    });
  }

  protected render(): string {
    return template;
  }
}
