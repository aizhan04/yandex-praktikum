import Block from "../../core/Block";
import template from "./chat.hbs?raw";

interface IProps {}

export class Chat extends Block<IProps> {
  protected render(): string {
    return template;
  }
}
