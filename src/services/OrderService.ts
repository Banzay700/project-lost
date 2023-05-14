import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IOrder, RequiredIdOrder } from 'types/IOrder'

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5001/api/restaurant/orders' }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getAllOrders: builder.query<IOrder[], string>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['Order'],
    }),
    getOrder: builder.query<IOrder, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
    createOrder: builder.mutation<IOrder, IOrder>({
      query: (post) => ({
        url: '/',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Order'],
    }),
    // Вкладені страви не додаються, а перезаписуються
    updateOrder: builder.mutation<IOrder, RequiredIdOrder>({
      query: (post) => ({
        url: '/',
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: builder.mutation<IOrder, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
  }),
})
