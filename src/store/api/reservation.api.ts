import { ReservationRequestType } from 'types'
import { api } from './api'

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateReservation: builder.mutation<ReservationRequestType, ReservationRequestType>({
      query: (body) => ({ url: `reservation`, method: 'PUT', body }),
      invalidatesTags: ['Reservation'],
    }),
  }),
})

export const { useUpdateReservationMutation } = reservationApi
