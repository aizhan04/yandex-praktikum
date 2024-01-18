import Block, { Events } from "../../core/Block";
import template from "./chatItem.hbs?raw";

interface IProps {
  name: string;
  message: string;
  time: string;
  unread_count?: number;
  sendMessage: boolean;
  isActiveChat?: boolean;
  user_avatar: string;
  onClick?: () => void;
  events?: Events;
}

export class ChatItem extends Block<IProps> {
  constructor(props: IProps) {
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
