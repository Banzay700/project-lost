const DEFAULT_SEATS_QUANTITY = 2
const SEATS_QUANTITY_STEP = 2

export const calculateSeatsQuantity = (seats: number) => {
  const seatsQuantity = (seats - DEFAULT_SEATS_QUANTITY) / SEATS_QUANTITY_STEP

  return Math.round(seatsQuantity)
}
