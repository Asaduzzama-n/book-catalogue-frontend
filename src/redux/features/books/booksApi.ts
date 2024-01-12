import { api } from "@/redux/api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => "/book" }),
    getSingleBook: builder.query({ query: (id) => `/book/${id}` }),
    getBooksForSearch: builder.query({
      query: (searchKey) => `/book/?searchTerm=${searchKey}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useGetBooksForSearchQuery,
} = bookApi;
