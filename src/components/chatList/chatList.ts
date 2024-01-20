import Block from "../../core/Block";
import template from "./chatList.hbs?raw";

interface Props {
  handleChatClick: () => void;
}

export class ChatList extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
