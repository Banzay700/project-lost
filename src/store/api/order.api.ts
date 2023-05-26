import { IOrder, RequiredIdOrder, TableDataOrders } from 'types'
import { NewlyOrderType } from 'store/reducers/newlyCreatedOrder.slice'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<TableDataOrders[], string>({
      query: () => ({ url: '/orders' }),
      providesTags: ['Order'],
    }),

    getOrder: builder.query<IOrder, string>({
      query: (id) => ({ url: `/orders/${id}` }),
    }),

    createOrder: builder.mutation<NewlyOrderType, NewlyOrderType>({
      query: (data) => ({ url: '/orders', method: 'POST', body: data }),
      invalidatesTags: ['Order'],
    }),

    updateOrder: builder.mutation<IOrder, RequiredIdOrder>({
      query: (post) => ({ url: '/orders', method: 'PUT', body: post }),
      invalidatesTags: ['Order'],
    }),

    deleteOrder: builder.mutation<IOrder, string>({
      query: (id) => ({ url: `/orders/${id}`, method: 'DELETE' }),
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
} = orderApi
