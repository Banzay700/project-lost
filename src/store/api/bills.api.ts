import { TableDataBills } from 'types'
import { api } from './api'

export const billsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBills: builder.query<TableDataBills[], string>({
      query: () => ({ url: '/bills' }),
      providesTags: ['Bills'],
    }),
    createBill: builder.mutation<TableDataBills, TableDataBills>({
      query: (body) => ({ url: '/bills', method: 'POST', body }),
      invalidatesTags: ['Bills'],
    }),
  }),
})

export const { useCreateBillMutation, useGetAllBillsQuery } = billsApi
