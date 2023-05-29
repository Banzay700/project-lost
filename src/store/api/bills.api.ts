import { BillsResponseType } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<BillsResponseType[], string>({
      query: () => ({ url: '/bills' }),
      providesTags: ['Bills'],
    }),
    getOneBill: builder.query<BillsResponseType, string>({
      query: (id) => ({ url: `/bills:${id}` }),
      // onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
      //   const { data } = await queryFulfilled
      //
      //   if (data) {
      //     dispatch(addBill(data))
      //   }
      // },
    }),
    createBill: builder.mutation<BillsResponseType, BillsResponseType>({
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
