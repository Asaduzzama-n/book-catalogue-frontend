import { api } from "@/redux/api/apiSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        credentials: "include",

        data,
      }),
    }),
    userLogin: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",

        data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/forgot-password",
        method: "POST",
        credentials: "include",

        data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/reset-password",
        method: "POST",
        credentials: "include",

        data,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/change-password",
        method: "POST",
        credentials: "include",

        data,
      }),
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
