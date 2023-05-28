import { IOrder, OrderFormedType, RequiredIdOrder, TableDataOrders } from 'types'
import { ActiveOrderType, addOrderToActive, NewOrderType } from 'store/reducers/order.slice'
import { api } from './api'

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<TableDataOrders[], string>({
      query: () => ({ url: '/orders' }),
      providesTags: ['Order'],
    }),

    getOrder: builder.query<ActiveOrderType, string>({
      query: (id) => ({ url: `/orders/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data) {
          dispatch(addOrderToActive(data[0])) /// TODO: fix this after DB will be fixed
        }
      },
    }),

    createOrder: builder.mutation<NewOrderType, OrderFormedType>({
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
  useLazyGetOrderQuery,
} = orderApi
