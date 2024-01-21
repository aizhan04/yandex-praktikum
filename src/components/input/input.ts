import Block, { Events } from "../../core/Block";
import templateInputProfile from "./profile-input.hbs?raw";
import templateInputSignIn from "./input-signIn.hbs?raw";
import templateInputChat from "./input-chat.hbs?raw";

interface Props {
  type: "email" | "password" | "text";
  name: string;
  label: string;
  env: "registration" | "profile" | "chat";
  placeholder?: string;
  onBlur: () => void;
  events: Events;
}

export class Input extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
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
