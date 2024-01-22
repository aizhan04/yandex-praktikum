import Block from "../../core/Block";
import template from "./search.hbs?raw";

interface IProps {
  handleChatClick: () => void;
}

export class Search extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
