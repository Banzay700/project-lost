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

        return {
          url: '/bills',
          params,
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
  }),
})

export const {
  useCreateBillMutation,
  useGetAllBillsQuery,
  useLazyGetOneBillQuery,
  useGetOneBillQuery,
} = billsApi
