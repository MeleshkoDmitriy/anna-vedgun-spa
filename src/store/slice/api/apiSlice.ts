import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../api/api';
import { TPost } from '../../../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], void>({
      query: () => '/posts',
      providesTags: ['posts'],
    }),
    // getUserById: builder.query<User, string>({
    //   query: (id) => `/users/${id}`,
    // }),
    // createUser: builder.mutation<User, Partial<User>>({
    //   query: (newUser) => ({
    //     url: '/users',
    //     method: 'POST',
    //     body: newUser,
    //   }),
    // }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
