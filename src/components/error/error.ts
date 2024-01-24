import Block from "../../core/Block";
import template from "./error.hbs?raw";

interface Props {
  title: string;
  subtitle: string;
}

export class Error extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
