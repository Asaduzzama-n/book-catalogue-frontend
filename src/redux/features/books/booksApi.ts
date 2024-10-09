import { api } from "@/redux/api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => ({
        url: "/book?limit=200",
        method: "GET",
        credentials: "include",
      }),
    }),
    getSingleBook: build.query({
      query: (id) => ({
        url: `/book/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getBooksForSearch: build.query({
      query: (searchKey) => ({
        url: `/book/?searchTerm=${searchKey}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useGetBooksForSearchQuery,
} = bookApi;
