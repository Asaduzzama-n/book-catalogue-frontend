import { api } from "@/redux/api/apiSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        data,
      }),
    }),
    userLogin: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/forgot-password",
        method: "POST",
        data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/change-password",
        method: "POST",
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
