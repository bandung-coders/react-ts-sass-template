import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TPrepareHeaders = (
  headers: Headers,
  api: {
    getState: () => any;
    extra: any;
    endpoint: string;
    type: "query" | "mutation";
    forced: boolean | undefined;
  }
) => Headers;

// Define a service using a base URL and expected endpoints
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const prepareHeaders: TPrepareHeaders = (headers, { getState }) => {
  const token = getState()?.auth?.token;

  // If we have a token set in state, let's assume that we should be passing it.
  if (token !== undefined) {
    headers.set("authorization", `Bearer ${token}`);
  }

  return headers;
};

export const serviceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders,
  }),
  endpoints: () => ({}),
});

export default serviceApi;
