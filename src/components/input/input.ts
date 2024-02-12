import Block, { Events } from "../../core/Block";
import templateInputProfile from "./profile-input.hbs?raw";
import templateInputSignIn from "./input-signIn.hbs?raw";
import templateInputChat from "./input-chat.hbs?raw";

interface Props {
  type: "email" | "password" | "text" | "file";
  name: string;
  label: string;
  hidden?: boolean;
  env: "registration" | "profile" | "chat";
  placeholder?: string;
  onBlur?: (e: Event) => void;
  onChange?: (e: Event) => void;
  onInput?: (e: Event) => void;
  events: Events;
}

export class Input extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected init() {
    if (this.props.onBlur) {
      this.props.events = {
        blur: this.props.onBlur,
      };
    }

    if (this.props.onChange) {
      this.props.events = {
        change: this.props.onChange,
      };
    }

    if (this.props.onInput) {
      this.props.events = {
        input: this.props.onInput,
      };
    }
  }

  protected render(): string {
    if (this.props.env === "profile") {
      return templateInputProfile;
    }

    if (this.props.env === "registration") {
      return templateInputSignIn;
    }

    return templateInputChat;
  }
}
