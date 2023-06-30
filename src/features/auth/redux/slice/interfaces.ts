import { type IUserDataResponse } from "../rtk/interfaces";

export interface IAuth {
  accessToken: string | null;
  userData: IUserDataResponse | Record<string, never>;
  isLogin: boolean;
}

export interface IInitAuthState {
  auth: IAuth;
}
