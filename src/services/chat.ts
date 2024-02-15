import ChatApi from "../api/chat";
import { apiHasError } from "../utils/apiHasError";
import { transformChats, transformChatUser } from "../utils/apiTransformers";

const chatApi = new ChatApi();

const getChats = async () => {
  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  return transformChats(responseChat);
};

const createChat = async (title: string) => {
  const response = await chatApi.create({ title });
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

interface IAddOrRemoveUsersToChat {
  users: number[];
  chatId: number;
}

const addUsersToChat = async ({ users, chatId }: IAddOrRemoveUsersToChat) => {
  const response = await chatApi.addUsers({ users, chatId });
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
};

const removeUsersFromChat = async ({
  users,
  chatId,
}: IAddOrRemoveUsersToChat) => {
  const response = await chatApi.deleteUsers({ users, chatId });
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
};

const getChatParticipants = async (chatId: number) => {
  const response = await chatApi.participants(chatId);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const users = response.map((user) => transformChatUser(user));

  return users;
};

export {
  createChat,
  getChats,
  addUsersToChat,
  removeUsersFromChat,
  getChatParticipants,
};
