import { OrderActiveType, OrderDBType, TableDataOrders } from 'types'
import { addOrderToActive } from '../reducers'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<TableDataOrders[], string>({
      query: () => ({ url: '/orders' }),
      providesTags: ['Order'],
    }),

    getOrder: builder.query<OrderActiveType, string>({
      query: (id) => ({ url: `/orders/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data) {
          dispatch(addOrderToActive(data))
        }
      },
    }),

    createOrder: builder.mutation<OrderDBType, OrderDBType>({
      query: (data) => ({ url: '/orders', method: 'POST', body: data }),
      invalidatesTags: ['Order'],
    }),

    updateOrder: builder.mutation<OrderDBType, OrderDBType>({
      query: (post) => ({ url: '/orders', method: 'PUT', body: post }),
      invalidatesTags: ['Order'],
    }),

    deleteOrder: builder.mutation<OrderDBType, string>({
      query: (id) => ({ url: `/orders/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useLazyGetOrderQuery,
} = orderApi
