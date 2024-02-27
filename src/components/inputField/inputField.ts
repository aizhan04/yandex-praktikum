import { ErrorText } from "../errorText/error-text";
import Block from "../../core/Block";
import SignIn from "./signIn-field.hbs?raw";
import Profile from "./profile-field.hbs?raw";
import Chat from "./chat-field.hbs?raw";
import { Input } from "../input/input";

interface IProps {
  name: string;
  label: string;
  type: "email" | "password" | "text";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  env: "registration" | "profile" | "chat" | "search";
  onBlur?: () => void;
  validate: (value: string) => boolean | string;
  onInput?: () => void;
}

type TRef = {
  input: Input;
  errorText: ErrorText;
};

export class InputField extends Block<IProps, TRef> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return null;
    }
    const element = this.refs.input.element as HTMLInputElement;
    return element.value;
  }

  private validate() {
    const element = this.refs.input.element as HTMLInputElement;
    const { value } = element;
    const error = this.props.validate(value);
    if (error) {
      console.log(error, "errror");
      this.refs.errorText.setProps({ error });
      return false;
    }
    this.refs.errorText.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    if (this.props.env === "profile") {
      return Profile;
    }

    if (this.props.env === "registration") {
      return SignIn;
    }

    return Chat;
  }
}
