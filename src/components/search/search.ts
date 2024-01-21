import Block from "../../core/Block";
import template from "./search.hbs?raw";

interface Props {
  handleChatClick: () => void;
}

export class Search extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
