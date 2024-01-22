import Block from "../../core/Block";
import template from "./chatList.hbs?raw";

interface IProps {
  handleChatClick: () => void;
}

export class ChatList extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
