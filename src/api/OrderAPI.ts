import { IOrder, RequiredIdOrder } from 'types/IOrder'
import { api } from './API'

export const orderAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<IOrder[], string>({
      query: () => ({
        url: '/orders',
      }),
      providesTags: ['Order'],
    }),
    getOrder: builder.query<IOrder, string>({
      query: (id) => ({
        url: `/orders/${id}`,
      }),
    }),
    createOrder: builder.mutation<IOrder, IOrder>({
      query: (post) => ({
        url: '/orders',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Order'],
    }),
    // Вкладені страви не додаються, а перезаписуються
    updateOrder: builder.mutation<IOrder, RequiredIdOrder>({
      query: (post) => ({
        url: '/orders',
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: builder.mutation<IOrder, string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useUpdateOrderMutation,
} = orderAPI
