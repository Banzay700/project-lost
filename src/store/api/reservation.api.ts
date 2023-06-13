import { ReservationRequestType } from 'types'
import { api } from './api'

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateReservation: builder.mutation<ReservationRequestType, ReservationRequestType>({
      query: (body) => ({ url: `reservation`, method: 'PUT', body }),
      invalidatesTags: ['Reservation'],
    }),
    getReservationsByDate: builder.query<ReservationRequestType[], string>({
      query: (date) => ({ url: `reservation/date/${date}` }),
      providesTags: ['Reservation'],
    }),
  }),
})

export const { useUpdateReservationMutation, useLazyGetReservationsByDateQuery } = reservationApi
