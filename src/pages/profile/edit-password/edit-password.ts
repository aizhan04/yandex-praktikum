import { ErrorText, InputField, SuccessText } from "../../../components";
import Block from "../../../core/Block";
import { router } from "../../../core/Router";
import template from "./edit-password.hbs?raw";
import * as validators from "../../../utils/validate";
import { changePassword } from "../../../services/user";
import { UserDTO } from "../../../api/type";
import { connect } from "../../../utils/connect";

interface IProps {
  user: UserDTO;
  validate: Record<string, (value: string) => string | boolean>;
  handleBackClick: () => void;
  handleSaveChangesClick: () => void;
}

type TRef = {
  oldPassword: InputField;
  newPassword: InputField;
  repeatNewPassword: InputField;
  errorText: ErrorText;
  successText: SuccessText;
};

export class EditPasswordPage extends Block<IProps, TRef> {
  constructor(props: IProps) {
    super({
      ...props,
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
          console.log("4444");

          this.refs.errorText.setProps({ error: undefined });
          this.refs.successText.setProps({
            success: "Password is set successfully",
          });
          console.log("6666");

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          this.refs.successText.setProps({ success: undefined });
          this.refs.errorText.setProps({ error: error.message });
        }
      },
    });
  }

  protected render(): string {
    return template;
  }
}

export default connect(({ user }) => ({ user }))(EditPasswordPage);
