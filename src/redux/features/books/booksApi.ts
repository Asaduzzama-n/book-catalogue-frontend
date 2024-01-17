import { api } from "@/redux/api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({ query: () => ({ url: "/book", method: "GET" }) }),
    getSingleBook: build.query({
      query: (id) => ({ url: `/book/${id}`, method: "GET" }),
    }),
    getBooksForSearch: build.query({
      query: (searchKey) => ({
        url: `/book/?searchTerm=${searchKey}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useGetBooksForSearchQuery,
} = bookApi;
