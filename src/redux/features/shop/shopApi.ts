import { api } from "@/redux/api/apiSlice";

export const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredBooks: builder.query({
      query: (filterUrl: string) => ({
        url: `/book/${filterUrl}`,
        method: "GET",
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/categories/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFilteredBooksQuery, useGetCategoryQuery } = shopApi;
