import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../api/api';
import { TFeedback, TMessage, TPost } from '../../../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['posts', 'feedbacks'],
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], void>({
      query: () => '/posts',
      providesTags: ['posts'],
    }),
    getFeedbacks: builder.query<TFeedback[], void>({
      query: () => '/feedbacks',
      providesTags: ['feedbacks'],
    }),
    postMessage: builder.mutation<TMessage, void>({
      query: (newMessage) => ({
        url: '/messages',
        method: 'POST',
        body: newMessage,
      }),
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

export const {
  useGetPostsQuery,
  useGetFeedbacksQuery,
  usePostMessageMutation,
} = apiSlice;
