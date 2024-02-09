// eslint-disable-next-line no-shadow
export enum AUTH {
  BASE = "/auth",
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  USER = "/user",
  LOGOUT = "/logout",
}

// eslint-disable-next-line no-shadow
export enum CHAT {
  BASE = "/chats",
  USERS = "/users",
  TOKEN = "/token",
}

// eslint-disable-next-line no-shadow
export enum USER {
  BASE = "/users",
  PROFILE = "/profile",
  PASSWORD = "/password",
  AVATAR = `${USER.PROFILE}/avatar`,
}
