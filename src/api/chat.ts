import HTTPTransport from "../utils/httpTransport";
import {
  APIError,
  ChatDTO,
  CreateChat,
  AddOrRemoveUsers,
  ChatUserDTO,
} from "./type";

// eslint-disable-next-line no-shadow
enum CHAT {
  BASE = "/chats",
  USERS = "/users",
}

const chatApi = new HTTPTransport(CHAT.BASE);

export default class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post("/", { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get("");
  }

  async addUsers(data: AddOrRemoveUsers): Promise<void | APIError> {
    return chatApi.put(CHAT.USERS, { data });
  }

  async deleteUsers(data: AddOrRemoveUsers): Promise<void | APIError> {
    return chatApi.delete(CHAT.USERS, { data });
  }

  async participants(chatId: number): Promise<ChatUserDTO[] | APIError> {
    return chatApi.get(`/${chatId}${CHAT.USERS}`);
  }
}
