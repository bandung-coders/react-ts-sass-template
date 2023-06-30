// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces
import {
  type IAppCommonResponse,
  type IAppParams,
} from "@/features/app/interfaces/api";
import { type IHomePlayListsData } from "./interfaces";

export const homeApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    homePlaylists: builder.query<
      IAppCommonResponse<IHomePlayListsData[]>,
      IAppParams
    >({
      query: ({ params }) => ({
        params,
        url: "/home/playlists",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyHomePlaylistsQuery } = homeApi;
