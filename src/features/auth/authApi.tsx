import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

interface RegisterRequest {
    username: string;
    password: string;
}

interface RegisterResponse {
    id: number;
    password: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8081/auth",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (newUser) => ({
                url: "/register",
                method: "POST",
                body: newUser,
            }),
        }),
        profile: builder.query<{ id: number; username: string }, void>({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useProfileQuery } = authApi;