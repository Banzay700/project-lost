import { OrderActiveType, OrderRequestType, OrderResponseType, OrderBillsQueryRequest } from 'types'
import { addOrderToActive } from '../reducers'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<OrderResponseType[], OrderBillsQueryRequest>({
      query: (body) => {
        const params: OrderBillsQueryRequest = {}

        if (body.type) {
          params.type = body.type
        }
        return {
          url: '/orders',
          params,
        }
      },
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

    createOrder: builder.mutation<OrderRequestType, OrderRequestType>({
      query: (data) => ({ url: '/orders', method: 'POST', body: data }),
      invalidatesTags: ['Order'],
    }),

    updateOrder: builder.mutation<OrderRequestType, OrderRequestType>({
      query: (post) => ({ url: '/orders', method: 'PUT', body: post }),
      invalidatesTags: ['Order'],
    }),

    deleteOrder: builder.mutation<OrderRequestType, string>({
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
