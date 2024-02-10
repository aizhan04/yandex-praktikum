import Block from "../../core/Block";
import { PAGES, router } from "../../core/Router";
import template from "./chats.hbs?raw";
// @ts-ignore
import userAvatar from "../../assets/user.svg";
import * as validators from "../../utils/validate";
import { InputField } from "../../components";

interface Props {}

type TRef = {
  message: InputField;
};

export class ChatsPage extends Block<Props, TRef> {
  constructor() {
    super({
      validate: {
        message: validators.message,
      },
      chats: [
        {
          name: "Вадим",
          message: "Здравствуйте",
          time: "11:00",
          unreadCount: 1,
          userAvatar,
        },
        {
          name: "Андрей",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Максим",
          message: "Привет",
          time: "13:00",
          isActiveChat: true,
          userAvatar,
        },
        {
          name: "Игорь",
          message: "Здравствуйте",
          time: "11:00",
          unreadCount: 1,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
        {
          name: "Илья",
          message: "Здравствуйте",
          time: "12:00",
          unreadCount: 2,
          userAvatar,
        },
      ],
      handleProfileClick: (event: Event) => {
        event.preventDefault();
        router.go(PAGES.PROFILE);
      },
      handleChatClick: () => {
        router.go(PAGES.CHATS);
      },
      handleSendClick: () => {
        const message = this.refs.message.value();
        if (!message) return;
        console.log({
          message,
        });
      },
    });
  }

  protected render(): string {
    return template;
  }
}
