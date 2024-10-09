import { api } from "@/redux/api/apiSlice";

export const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation({
      query: ({ data }: any) => ({
        url: "/payment/init",
        method: "POST",
        credentials: "include",
        data,
      }),
      invalidatesTags: ["payment"],
    }),
    getSinglePayment: builder.query({
      query: (invoiceId: string) => ({
        url: `/payment/${invoiceId}`,
        credentials: "include",
        method: "GET",
      }),
    }),
    getUserPurchaseHistory: builder.query({
      query: () => ({
        url: "/user/purchase-history",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["payment"],
    }),
  }),
});

export const {
  useInitiatePaymentMutation,
  useGetSinglePaymentQuery,
  useGetUserPurchaseHistoryQuery,
} = paymentApi;
