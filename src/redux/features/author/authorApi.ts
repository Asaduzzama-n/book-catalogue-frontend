import { api } from "@/redux/api/apiSlice";

export const authorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({ query: () => `/author` }),
  }),
});

export const { useGetAuthorsQuery } = authorApi;
