import Block, { Events } from "../../core/Block";
import template from "./chatItem.hbs?raw";

interface Props {
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  sendMessage: boolean;
  isActiveChat?: boolean;
  userAvatar: string;
  onClick?: () => void;
  events?: Events;
}

export class ChatItem extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  protected init(): void {
    if (this.props.onClick) {
      this.props.events = {
        click: this.props.onClick,
      };
    }
  }

  protected render(): string {
    return template;
  }
}
