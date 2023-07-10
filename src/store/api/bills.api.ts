import { openNewBill } from 'store/reducers'
import { OrderBillsQueryRequest, ModifiedDataType, BillsResponseType, BillsType } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<BillsResponseType, OrderBillsQueryRequest>({
      query: ({ status, page, orderType, limit }) => {
        const params: OrderBillsQueryRequest = {}

        if (orderType) params.orderType = orderType
        if (status) params.status = status
        if (page) params.page = page
        if (limit) params.limit = limit

        return { url: '/bills', params }
      },
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data.data.length !== 0) {
          dispatch(openNewBill(data.data[0]))
        }
      },
      providesTags: ['Bills'],
    }),
    getOneBill: builder.query<BillsType, string>({
      query: (id) => ({ url: `/bills/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data) {
          dispatch(openNewBill(data))
        }
      },
    }),
    createBill: builder.mutation<BillsType, ModifiedDataType>({
      query: (body) => ({ url: '/bills', method: 'POST', body }),
      invalidatesTags: ['Bills', 'Order', 'Delivery'],
    }),
    updateBill: builder.mutation<BillsType, BillsType>({
      query: (post) => ({ url: `/bills`, method: 'PUT', body: post }),
      invalidatesTags: ['Bills'],
    }),
    sendEmail: builder.query<string, string>({
      query: (id) => ({ url: `bills/send/${id}` }),
    }),
  }),
})

export const {
  useCreateBillMutation,
  useGetAllBillsQuery,
  useLazyGetOneBillQuery,
  useGetOneBillQuery,
  useLazySendEmailQuery,
  useUpdateBillMutation,
} = billsApi
