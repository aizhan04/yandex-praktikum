import Block from "../../core/Block";
import template from "./avatar.hbs?raw";

interface Props {}

export class Avatar extends Block<Props> {
  protected render(): string {
    return template;
  }
}
