import { openNewBill } from 'store/reducers'
import { BillsResponseType, OrderBillsQueryRequest, ModifiedDataType } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<BillsResponseType[], OrderBillsQueryRequest>({
      query: (body) => {
        const params: OrderBillsQueryRequest = {}

        if (body.type) {
          params.type = body.type
        }

        return {
          url: '/bills',
          params,
        }
      },
      providesTags: ['Bills'],
    }),
    getOneBill: builder.query<BillsResponseType, string>({
      query: (id) => ({ url: `/bills/${id}` }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled

        if (data) {
          dispatch(openNewBill(data))
        }
      },
    }),
    createBill: builder.mutation<BillsResponseType, ModifiedDataType>({
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
