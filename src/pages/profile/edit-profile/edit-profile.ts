import { ErrorText, InputField, SuccessText } from "../../../components";
import Block from "../../../core/Block";
import { router } from "../../../core/Router";
import template from "./edit-profile.hbs?raw";
import * as validators from "../../../utils/validate";
import { UserDTO } from "../../../api/type";
import { connect } from "../../../utils/connect";
import { changeProfile } from "../../../services/user";

interface IProps {
  user: UserDTO;
  validate: Record<string, (value: string) => string | boolean | undefined>;
  handleBackClick: () => void;
  handleSaveChangesClick: (event: Event) => void;
}

type TRef = {
  first_name: InputField;
  second_name: InputField;
  display_name: InputField;
  login: InputField;
  email: InputField;
  phone: InputField;
  errorText: ErrorText;
  successText: SuccessText;
};

export class EditProfilePage extends Block<IProps, TRef> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        first_name: validators.first_name,
        second_name: validators.second_name,
        display_name: validators.first_name,
        login: validators.login,
        email: validators.email,
        phone: validators.phone,
      },
      handleBackClick: () => {
        router.back();
      },
      handleSaveChangesClick: async (event: Event) => {
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

        try {
          await changeProfile({
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
          this.refs.errorText.setProps({ error: undefined });
          this.refs.successText.setProps({
            success: "Profile has been changed successfully",
          });
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

export default connect(({ user }) => ({ user }))(EditProfilePage);
