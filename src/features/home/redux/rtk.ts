// Service
import serviceApi from "@/plugins/redux/service";

// Interfaces

export const homeApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    homePlaylists: builder.query({
      query: (payload) => ({
        url: "/home/playlists",
        method: "GET",
        body: payload.body,
      }),
      transformResponse: (response) => response,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyHomePlaylistsQuery } = homeApi;
