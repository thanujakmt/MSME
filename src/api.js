import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
});

// Export hooks for usage in functional components
export const {
  useRegisterUserMutation,
  useRe_registerUserMutation,
  useCancelRegistrationMutation,
  useForgotRegistrationMutation
} = api;
