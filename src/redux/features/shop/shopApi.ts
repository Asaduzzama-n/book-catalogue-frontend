import { api } from "@/redux/api/apiSlice";

export const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredBooks: builder.query({
      query: ({ language, category }) => {
        let queryString = `/book/?`;
        if (language !== null) {
          queryString += `&language=${language}`;
        }

        if (category !== null) {
          queryString += `&category=${category}`;
        }

        return queryString;
      },
    }),
  }),
});

export const { useGetFilteredBooksQuery } = shopApi;
