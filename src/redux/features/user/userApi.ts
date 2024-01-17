import { api } from "@/redux/api/apiSlice";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({ url: "/user/my-profile", method: "GET" }),
      providesTags: ["user" as any],
    }),
    updateUser: builder.mutation({
      query: (data: any) => ({
        url: "/user/my-profile",
        method: "PATCH",
        data: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["user" as any],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserMutation } = userApi;
