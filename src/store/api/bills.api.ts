import { openNewBill } from 'store/reducers'
import { OrderBillsQueryRequest, ModifiedDataType, BillsResponseType, BillsType } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<BillsResponseType, OrderBillsQueryRequest>({
      query: (body) => {
        const params: OrderBillsQueryRequest = {}

        if (body.orderType) {
          params.orderType = body.orderType
        }

        return { url: '/bills', params }
      },
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
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
      invalidatesTags: ['Bills', 'Order'],
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
