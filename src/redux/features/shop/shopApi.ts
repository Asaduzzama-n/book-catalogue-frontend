import { api } from "@/redux/api/apiSlice";

export const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredBooks: builder.query({
      query: ({ language, category, minPrice, maxPrice }) => {
        let queryString = `/book/?`;
        if (language !== null) {
          queryString += `&language=${language}`;
        }

        if (category !== null) {
          queryString += `&category=${category}`;
        }
        if (minPrice !== 0) {
          queryString += `&minPrice=${minPrice}`;
        }
        if (maxPrice !== 0) {
          queryString += `&maxPrice=${maxPrice}`;
        }

        return { url: queryString, method: "GET" };
      },
    }),
  }),
});

export const { useGetFilteredBooksQuery } = shopApi;
