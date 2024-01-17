import { api } from "@/redux/api/apiSlice";

export const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ data }) => ({
        url: `/review/`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["review"],
    }),
    getReviews: builder.query({
      query: (id) => ({ url: `/review/book/${id}`, method: "GET" }),
    }),
    updateReview: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/review/${id}`,
          method: "PATCH",
          data: data,
        };
      },
      invalidatesTags: ["review"],
    }),
    getSingleReview: builder.query({
      query: (id) => ({ url: `/review/${id}`, method: "GET" }),
    }),
    getReviewsWithPagination: builder.query({
      query: ({ id, rating, pageNumber, limit, sortBy, sortOrder }) => {
        // Dynamically construct the query string based on provided parameters
        let queryString = `/review/book/${id}?page=${pageNumber}&limit=${limit}`;

        // Include rating in the query string only if it's provided
        if (rating !== undefined && rating !== null) {
          queryString += `&rating=${rating}`;
        }

        // Include sortBy and sortOrder in the query string only if they're provided
        if (sortBy && sortOrder) {
          queryString += `&sortBy=${sortBy}&sortOrder=${sortOrder}`;
        }

        return { url: queryString, method: "GET" };
      },
      providesTags: ["review"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  usePostReviewMutation,
  useGetReviewsWithPaginationQuery,
  useUpdateReviewMutation,
  useGetSingleReviewQuery,
} = reviewApi;
