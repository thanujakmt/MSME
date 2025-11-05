import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { build } from 'vite';

export const api = createApi({
  reducerPath: 'api', // optional, defaults to 'api'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Posts', 'Users'], // optional, for cache invalidation
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({    
        url: 'registerUser',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['registerUser'],
    }),
    re_registerUser: builder.mutation({
      query: (data) => ({    
        url: 're_registerUser',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['re_registerUser'],
    }),
    cancelRegistration: builder.mutation({
      query: (data) => ({    
        url: 'cancelRegistration',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cancelRegistration'],
    }),
    forgotRegistration: builder.mutation({
      query: (data) => ({    
        url: 'forgotRegistration',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['forgotRegistration'],
    }),
    applicants: build.mutation({
      query: (data) => ({    
        url: 'applicants',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['applicants'],
    }),
    getAllBlogs: builder.query({
      query: () => ({
        url: 'getAllBlogs'
      })
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useRegisterUserMutation,
  useRe_registerUserMutation,
  useCancelRegistrationMutation,
  useForgotRegistrationMutation,
  useGetAllBlogsQuery,
  useApplicantsMutation
} = api;

