import { OrderActiveType, OrderRequestType, OrderBillsQueryRequest, OrderResponseType } from 'types'
import { convertOrderData } from 'utils'
import { openOrder } from '../reducers'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<OrderResponseType, OrderBillsQueryRequest>({
      query: ({ page, orderType, status, limit }) => {
        const params: OrderBillsQueryRequest = {}

        if (orderType) params.orderType = orderType
        if (page) params.page = page
        if (status) params.status = status
        if (limit) params.limit = limit
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
      query: (id: string) => ({ url: `/orders/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data) {
          const { orderActive } = convertOrderData(data)
          dispatch(openOrder(orderActive))
        }
      },
    }),

    createOrder: builder.mutation<OrderRequestType, OrderRequestType>({
      query: (body) => ({ url: '/orders', method: 'POST', body }),
      invalidatesTags: ['Order'],
    }),

    updateOrder: builder.mutation<OrderRequestType, OrderRequestType>({
      query: (body) => ({ url: '/orders', method: 'PUT', body }),
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
