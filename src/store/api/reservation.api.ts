import { ReservationResponseType, ReservationRequestType } from 'types'
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
  }),
})

export const {
  useCreateReservationMutation,
  useUpdateReservationMutation,
  useLazyGetReservationsByDateQuery,
} = reservationApi
