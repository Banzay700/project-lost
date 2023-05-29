import { TableDataBills } from 'types'
import { addBill } from 'store/reducers'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<TableDataBills[], string>({
      query: () => ({ url: '/bills' }),
      providesTags: ['Bills'],
    }),
    getOneBill: builder.query<TableDataBills, string>({
      query: (id) => ({ url: `/bills:${id}` }),
      // onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
      //   const { data } = await queryFulfilled
      //
      //   if (data) {
      //     dispatch(addBill(data))
      //   }
      // },
    }),
    createBill: builder.mutation<TableDataBills, TableDataBills>({
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
