import { api } from "@/redux/api/apiSlice";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),
    getMyBooks: builder.query({
      query: () => ({
        url: "/user/my-books",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data: any) => ({
        url: "/user/my-profile",
        method: "PATCH",
        data: data,
        credentials: "include",

        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["user"],
    }),
    getWishList: builder.query({
      query: (id: string) => ({ url: `/wishlist/${id}`, method: "GET" }),
      providesTags: ["wishlist"],
    }),
    addToWishList: builder.mutation({
      query: ({ data }) => ({
        url: `/wishlist/`,
        method: "POST",
        credentials: "include",

        data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    removeFromWishList: builder.mutation({
      query: ({ data }) => ({
        url: "/wishlist/",
        method: "DELETE",
        credentials: "include",

        data,
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserMutation,
  useGetWishListQuery,
  useAddToWishListMutation,
  useRemoveFromWishListMutation,
  useGetMyBooksQuery,
} = userApi;
