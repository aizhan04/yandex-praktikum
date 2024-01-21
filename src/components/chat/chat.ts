import Block from "../../core/Block";
import template from "./chat.hbs?raw";

interface Props {}

export class Chat extends Block<Props> {
  protected render(): string {
    return template;
  }
}
