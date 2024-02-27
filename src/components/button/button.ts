import Block, { Events } from "../../core/Block";
import button from "./button.hbs?raw";
import buttonChat from "./button-chat.hbs?raw";

interface Props {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  events?: Events;
  env: "chat" | "profile";
}

export class Button extends Block<Props> {
  protected init(): void {
    if (this.props.onClick) {
      this.props.events = {
        click: this.props.onClick,
      };
    }
  }

  protected render(): string {
    if (this.props.env === "chat") {
      return buttonChat;
    }

    return button;
  }
}
