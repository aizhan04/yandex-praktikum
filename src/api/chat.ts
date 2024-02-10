import HTTPTransport from "../utils/httpTransport";
import { APIError, ChatDTO, CreateChat } from "./type";

// eslint-disable-next-line no-shadow
enum CHAT {
  BASE = "/chats",
}

const chatApi = new HTTPTransport(CHAT.BASE);

export default class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post("/", { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get("");
  }
}
