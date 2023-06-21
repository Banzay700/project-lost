export const SCROLL_STEP = 270

export const partySizeArray = (maxSeats: number) => {
  const lengthPartySize = 8

  return Array.from({ length: lengthPartySize }, (_, i) => {
    return lengthPartySize >= maxSeats ? i + 1 : i + (maxSeats - lengthPartySize) + 1
  })
}
