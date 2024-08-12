import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryFn } from "../../typeDefs/api";

const BASE_URL = "http://localhost:3000";

export enum HTTP {
  GET = "GET",
  POST = "POST",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

const baseQueryWithAuth =
  (path: string): baseQueryFn =>
  async (args, api, extraOptions = {}) => {
    const result = await fetchBaseQuery({ baseUrl: BASE_URL + path })(
      args,
      api,
      extraOptions
    );

    return { ...result, res: "my response message" };
  };

const ExtensionAPI = createApi({
  reducerPath: "extensions",
  baseQuery: baseQueryWithAuth("/extensions"),
  tagTypes: ["extensions", "extensionDetail"],
  endpoints: (builder) => ({
    getExtensions: builder.query({
      query: (params) => ({
        url: "/",
        params,
      }),
      providesTags: ["extensions"],
    }),
    getExtension: builder.query({
      query: (body) => ({
        url: `/${body.id}`,
      }),
      providesTags: ["extensionDetail"],
    }),
    addExtension: builder.mutation({
      query: (body) => ({
        url: "/",
        method: HTTP.POST,
        body,
      }),
      invalidatesTags: ["extensions"],
    }),
    updateExtension: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: HTTP.UPDATE,
        body,
      }),
      invalidatesTags: ["extensions"],
    }),
    deleteExtension: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: HTTP.DELETE,
      }),
      invalidatesTags: ["extensions"],
    }),
  }),
});

const UserAPI = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/users" }),
  tagTypes: ["users", "userDetail"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        url: "/",
        params,
      }),
      providesTags: ["users"],
    }),
    getUser: builder.query({
      query: (body) => ({
        url: `/${body.email}`,
      }),
      providesTags: ["userDetail"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: HTTP.UPDATE,
        body,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: HTTP.DELETE,
      }),
      invalidatesTags: ["users"],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: "/",
        method: HTTP.POST,
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

const AuthAPI = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/auth" }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signUserUp: builder.query({
      query: (body) => ({
        url: "/signup",
        method: HTTP.POST,
        body,
      }),
      providesTags: ["auth"],
    }),
    logUserIn: builder.query({
      query: (body) => ({
        url: "/",
        method: HTTP.POST,
        body,
      }),
      providesTags: ["auth"],
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: `/${body.email}`,
        method: HTTP.POST,
        body,
      }),
    }),
  }),
});

export { ExtensionAPI, UserAPI, AuthAPI };
