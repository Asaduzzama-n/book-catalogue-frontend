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
  }),
});

export const { useUserSignupMutation, useUserLoginMutation } = authApi;
