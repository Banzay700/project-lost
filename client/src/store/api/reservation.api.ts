import { ReservationResponseType, ReservationRequestType, ReservationInfoResponseType } from 'types'
import { api } from './api'

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReservation: builder.mutation<ReservationRequestType, ReservationRequestType>({
      query: (body) => ({ url: `reservation`, method: 'POST', body }),
      invalidatesTags: ['Reservation'],
    }),

    updateReservation: builder.mutation<ReservationResponseType, ReservationResponseType>({
      query: (body) => ({ url: `reservation`, method: 'PUT', body }),
      invalidatesTags: ['Reservation'],
    }),

    getReservationsByDate: builder.query<ReservationResponseType[], string>({
      query: (date) => ({ url: `reservation/date/${date}` }),
      providesTags: ['Reservation'],
    }),

    getReservationInfo: builder.query<ReservationInfoResponseType, string>({
      query: (tableNumber) => ({ url: `reservation/info/${tableNumber}` }),
      providesTags: ['Reservation'],
    }),
  }),
})

export const {
  useGetReservationInfoQuery,
  useCreateReservationMutation,
  useUpdateReservationMutation,
  useLazyGetReservationsByDateQuery,
  useLazyGetReservationInfoQuery,
} = reservationApi
