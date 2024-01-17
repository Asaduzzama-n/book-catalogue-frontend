import { api } from "@/redux/api/apiSlice";

export const authorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => ({ url: `/author`, method: "GET" }),
    }),
  }),
});

export const { useGetAuthorsQuery } = authorApi;
