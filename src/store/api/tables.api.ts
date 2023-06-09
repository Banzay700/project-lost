import { TableFreeResponseType, TableType, TableMessageResponseType } from 'types'
import { api } from './api'

export const tablesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFreeTables: builder.query<TableFreeResponseType[], void>({
      query: () => ({ url: '/tables/free' }),
      providesTags: ['Table'],
    }),

    getTableStatus: builder.query<string, string>({
      query: (tableNumber) => ({ url: `/tables/status/${tableNumber}` }),
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
  useLazyGetTableStatusQuery,
  useGetTableStatusQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
} = tablesApi
