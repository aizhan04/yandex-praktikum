import { User } from "../type";
import HTTPTransport from "../utils/httpTransport";
import { APIError, ChangeUserProfile, Password, UserDTO } from "./type";

// eslint-disable-next-line no-shadow
enum USERS {
  BASE = "/user",
  PROFILE = "/profile",
  PASSWORD = "/password",
  AVATAR = `${USERS.PROFILE}/avatar`,
}

const usersApi = new HTTPTransport(USERS.BASE);

export default class UsersApi {
  async profile(data: ChangeUserProfile): Promise<UserDTO | APIError> {
    return usersApi.put(USERS.PROFILE, { data });
  }

  async avatar(data: FormData): Promise<User | APIError> {
    return usersApi.put(USERS.AVATAR, { data });
  }

  async password(data: Password): Promise<void | APIError> {
    return usersApi.put(USERS.PASSWORD, { data });
  }
}
