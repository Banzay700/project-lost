import { TableFreeResponseType, TableType, TableMessageResponseType } from 'types'
import { api } from './api'

export const tableApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFreeTables: builder.query<TableFreeResponseType[], void>({
      query: () => ({ url: '/tables/free' }),
      providesTags: ['Table'],
    }),

    getTableReservationForCurrentDay: builder.query<TableMessageResponseType, string>({
      query: (tableNumber) => ({ url: `/tables/reservation/${tableNumber}` }),
    }),
    updateTableStatus: builder.mutation<TableType, string>({
      query: (tableNumber) => ({ url: `/tables/${tableNumber}`, method: 'PUT' }),
      invalidatesTags: ['Table'],
    }),
  }),
})

export const {
  useGetFreeTablesQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
} = tableApi
