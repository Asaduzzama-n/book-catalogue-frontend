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
      query: (id) => `/review/${id}`,
      providesTags: ["review"],
    }),
  }),
});

export const { useGetReviewsQuery, usePostReviewMutation } = reviewApi;
