import HTTPTransport from "../utils/httpTransport";
import {
  APIError,
  CreateUser,
  LoginRequestData,
  SignUpResponse,
  UserDTO,
} from "./type";

// eslint-disable-next-line no-shadow
enum AUTH {
  BASE = "/auth",
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  USER = "/user",
  LOGOUT = "/logout",
}

const authApi = new HTTPTransport(AUTH.BASE);

export default class AuthApi {
  async create(data: CreateUser): Promise<SignUpResponse> {
    return authApi.post(AUTH.SIGNUP, { data });
  }

  async login(data: LoginRequestData): Promise<void | APIError> {
    return authApi.post(AUTH.SIGNIN, { data });
  }

  async me(): Promise<UserDTO | APIError> {
    return authApi.get(AUTH.USER);
  }

  async logout(): Promise<void | APIError> {
    return authApi.post(AUTH.LOGOUT);
  }
}
