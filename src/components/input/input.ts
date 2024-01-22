import Block, { Events } from "../../core/Block";
import template from "./input.hbs?raw";

interface IProps {
  type: "email" | "password" | "text";
  name: string;
  label: string;
  // env: "auth" | "profile" | "chat";
  placeholder?: string;
  onBlur: () => void;
  events: Events;
}

export class Input extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    return template;
  }
}
