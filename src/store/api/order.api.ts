import { OrderActiveType, OrderRequestType, OrderBillsQueryRequest, OrderResponseType } from 'types'
import { convertOrderData } from 'utils'
import { openOrder } from '../reducers'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<OrderResponseType, OrderBillsQueryRequest>({
      query: (body) => {
        const params: OrderBillsQueryRequest = {}

        if (body.orderType) {
          params.orderType = body.orderType
        }
        return { url: '/orders', params }
      },
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        const { orderActive } = convertOrderData(data.data[0] as OrderActiveType)
        if (data) {
          dispatch(openOrder(orderActive))
        }
      },
      providesTags: ['Order'],
    }),

    getOrder: builder.query<OrderActiveType, string>({
      query: (id) => ({ url: `/orders/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        const { orderActive } = convertOrderData(data)

        if (orderActive) {
          dispatch(openOrder(orderActive))
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
  useLazyGetOrderQuery,
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi
