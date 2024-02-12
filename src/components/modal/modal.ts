import Block from "../../core/Block";
import template from "./modal.hbs?raw";

interface Props {
  open: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Refs = {};

export class Modal extends Block<Props, Refs> {
  protected render(): string {
    return template;
  }
}
