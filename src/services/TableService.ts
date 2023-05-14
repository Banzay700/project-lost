import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IRequestDeleteReservation,
  IReservationsInfo,
  ITable,
  TableMessageType,
} from 'types/ITable'

export const tableAPI = createApi({
  reducerPath: 'tableAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5001/api/restaurant/tables' }),
  tagTypes: ['Table'],
  endpoints: (builder) => ({
    getAllTables: builder.query<ITable[], string>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['Table'],
    }),
    getFreeTables: builder.query<Pick<ITable, 'id' | 'number'>[], string>({
      query: () => ({
        url: '/free',
      }),
    }),
    getTableReservationForCurrentDay: builder.query<
      TableMessageType | Pick<TableMessageType, 'message'>,
      string
    >({
      query: (id) => ({
        url: `/reservation/${id}`,
      }),
    }),
    getTableReservationSelectedDate: builder.query<
      TableMessageType | Pick<TableMessageType, 'message'>,
      { id: string; date: string } // <--- date: "2023-05-13"
    >({
      query: ({ id, date }) => ({
        url: `/reservation/${id}/${date}`,
      }),
    }),
    addNewTable: builder.mutation<ITable, Pick<ITable, 'number' | 'tableLimit'>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Table'],
    }),
    addNewReservation: builder.mutation<ITable, { id: string; body: IReservationsInfo }>({
      query: ({ id, body }) => ({
        url: `/reservation/${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Table'],
    }),
    updateTableStatus: builder.mutation<ITable, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Table'],
    }),
    updateReservation: builder.mutation<ITable, { id: string; body: Required<IReservationsInfo> }>({
      query: ({ id, body }) => ({
        url: `/reservation/update/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Table'],
    }),
    deleteTable: builder.mutation<ITable, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Table'],
    }),
    deleteReservation: builder.mutation<
      IRequestDeleteReservation,
      { tableNumber: string; reservationId: string }
    >({
      query: ({ tableNumber, reservationId }) => ({
        url: `/reservation/${tableNumber}/${reservationId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Table'],
    }),
  }),
})
