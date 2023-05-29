import { BillsResponseType } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<BillsResponseType[], string>({
      query: () => ({ url: '/bills' }),
      providesTags: ['Bills'],
    }),
    createBill: builder.mutation<BillsResponseType, BillsResponseType>({
      query: (body) => ({ url: '/bills', method: 'POST', body }),
      invalidatesTags: ['Bills', 'Order'],
    }),
  }),
})

export const { useCreateBillMutation, useGetAllBillsQuery } = billsApi
