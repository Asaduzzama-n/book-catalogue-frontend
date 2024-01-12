import { api } from "@/redux/api/apiSlice";

export const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ data }) => ({
        url: `/review/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getReviews: builder.query({
      query: (id) => `/review/book/${id}`,
      providesTags: ["review"],
    }),
    updateReview: builder.mutation({
      query: ({ id, data }) => {
        console.log("Mutation data:", data); // Log the data object

        return {
          url: `/review/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["review"],
    }),
    getSingleReview: builder.query({
      query: (id) => `/review/${id}`,
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

        return queryString;
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
