import Block from "../../core/Block";
import template from "./error.hbs?raw";

interface IProps {
  title: string;
  subtitle: string;
}

export class Error extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
