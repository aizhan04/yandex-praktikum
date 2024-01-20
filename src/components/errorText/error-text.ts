import Block from "../../core/Block";
import template from "./error-text.hbs?raw";

interface Props {
  error?: string;
}

export class ErrorText extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
