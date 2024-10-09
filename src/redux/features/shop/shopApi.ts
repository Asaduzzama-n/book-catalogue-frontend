import { api } from "@/redux/api/apiSlice";

export const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredBooks: builder.query({
      query: (filterUrl: string) => ({
        url: `/book/${filterUrl}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/categories/",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetFilteredBooksQuery, useGetCategoryQuery } = shopApi;
