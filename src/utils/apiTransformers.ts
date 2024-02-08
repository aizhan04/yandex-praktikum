import { ChatDTO, ChatUserDTO, UserDTO } from "../api/type.ts";
import constants from "../constants";
import { Chat, ChatUser, User } from "../type.ts";

const buildPathToResource = (resource: string | null) => {
  if (!resource) {
    return null;
  }

  return `${constants.HOST}/resources/${resource}`;
};

export const transformUser = (data: UserDTO): User => ({
  id: data.id,
  login: data.login,
  firstName: data.first_name,
  secondName: data.second_name,
  displayName: data.display_name ? data.display_name : data.login,
  avatar: data.avatar,
  phone: data.phone,
  email: data.email,
});

export const transformChatUser = (data: ChatUserDTO): ChatUser => ({
  id: data.id,
  login: data.login,
  firstName: data.first_name,
  secondName: data.second_name,
  displayName: data.display_name ? data.display_name : data.login,
  avatar: data.avatar,
  role: data.role,
});

export const transformChats = (data: ChatDTO[]): Chat[] =>
  data.map((chat) => ({
    avatar: buildPathToResource(chat.avatar),
    id: chat.id,
    title: chat.title,
    unreadCount: chat.unread_count,
    lastMessage: chat.last_message
      ? {
          content: chat.last_message.content,
          time: chat.last_message.time,
          user: {
            id: chat.last_message.user.id,
            login: chat.last_message.user.login,
            firstName: chat.last_message.user.first_name,
            secondName: chat.last_message.user.second_name,
            displayName: chat.last_message.user.display_name,
            avatar: chat.last_message.user.avatar,
            phone: chat.last_message.user.phone,
            email: chat.last_message.user.email,
          },
        }
      : null,
  }));
