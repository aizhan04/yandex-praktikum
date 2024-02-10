import Block from "../../core/Block";
import template from "./form-auth.hbs?raw";

interface Props {}

export class FormAuth extends Block<Props> {
  protected render(): string {
    return template;
  }
}
