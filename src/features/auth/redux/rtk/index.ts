// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces
import { type IAppBody } from "@/features/app/interfaces";
import { type ILoginResponse, type ILoginBody } from "./interfaces";

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IAppBody<ILoginBody>>({
      query: ({ body }) => ({
        body,
        url: "/auth/login",
        method: "POST",
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
