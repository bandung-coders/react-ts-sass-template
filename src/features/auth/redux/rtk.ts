// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces
import { type IRTKPayload } from "@/features/app/interfaces/rtk";
import { type ILoginBody, type ILoginResponse } from "../interfaces/api";

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IRTKPayload<ILoginBody>>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload.body,
      }),
      transformResponse: ({ accessToken, userData }: ILoginResponse) => ({
        accessToken,
        userData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
