import { api } from "@/redux/api/apiSlice";

export const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation({
      query: ({ data }: any) => ({
        url: "/payment/init",
        method: "POST",
        data,
      }),
      invalidatesTags: ["payment"],
    }),
    getSinglePayment: builder.query({
      query: (invoiceId: string) => ({
        url: `/payment/${invoiceId}`,
        method: "GET",
      }),
    }),
    getUserPurchaseHistory: builder.query({
      query: () => ({
        url: "/user/purchase-history",
        method: "GET",
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
