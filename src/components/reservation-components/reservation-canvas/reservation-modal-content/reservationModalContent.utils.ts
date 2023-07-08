import { ReservationCanvasType } from 'types/ReservationsTypes'
import { FilterMenuItemType } from 'types/ComponentsItemType'

export const prepareReservationData = (
  reservation: ReservationCanvasType,
): FilterMenuItemType[] => {
  return [
    { label: 'Reservation time:', value: reservation.time },
    { label: 'Reservation date:', value: 'Today' },
    { label: 'Client Name:', value: reservation.clientName },
    { label: 'Contact number:', value: reservation.phoneNumber },
    { label: 'Party size:', value: `${reservation.persons} guests` },
  ]
}
