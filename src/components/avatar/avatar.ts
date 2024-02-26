import Block from "../../core/Block";
import template from "./avatar.hbs?raw";
import { Input } from "../input/input";
import { changeAvatar } from "../../services/user";
import { ErrorText } from "../errorText/error-text";
import { SuccessText } from "../successText/success-text";
import { BASE_URL } from "../../constants";

interface IProps {
  img: string | null;
  handleAvatarChange: () => void;
}

type TRef = {
  input: Input;
  errorText: ErrorText;
  successText: SuccessText;
};

export class Avatar extends Block<IProps, TRef> {
  constructor(props: IProps) {
    super({
      ...props,
      img: props.img ? `${BASE_URL}/resources${props.img}` : null,
      handleAvatarChange: async () => {
        const input = this.refs.input.element as HTMLInputElement;
        if (input.files) {
          if (input.files.length > 0) {
            const formData = new FormData();
            const file = input.files[0];
            formData.append("avatar", file);
            try {
              await changeAvatar(formData);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
              this.refs.successText.setProps({ success: undefined });
              this.refs.errorText.setProps({ error: error.message });
            }
          }
        }
      },
    });
  }

  protected render(): string {
    return template;
  }
}
