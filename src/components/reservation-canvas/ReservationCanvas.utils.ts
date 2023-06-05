// :TODO: TEMPORARY SOLUTION
export type TablePlacementType = {
  sectionOne: { tableNumber: string; seatsQuantity: number }[]
  sectionTwo: { tableNumber: string; seatsQuantity: number }[]
  sectionThree: { tableNumber: string; seatsQuantity: number }[]
}

export const tablePlacementMap: TablePlacementType = {
  sectionOne: [
    { tableNumber: 'T-01', seatsQuantity: 4 },
    { tableNumber: 'T-02', seatsQuantity: 2 },
    { tableNumber: 'T-03', seatsQuantity: 10 },
    { tableNumber: 'T-04', seatsQuantity: 2 },
    { tableNumber: 'T-05', seatsQuantity: 4 },
  ],
  sectionTwo: [
    { tableNumber: 'T-06', seatsQuantity: 12 },
    { tableNumber: 'T-07', seatsQuantity: 10 },
    { tableNumber: 'T-08', seatsQuantity: 12 },
  ],
  sectionThree: [
    { tableNumber: 'T-09', seatsQuantity: 2 },
    { tableNumber: 'T-10', seatsQuantity: 10 },
    { tableNumber: 'T-11', seatsQuantity: 4 },
    { tableNumber: 'T-12', seatsQuantity: 2 },
    { tableNumber: 'T-12', seatsQuantity: 4 },
  ],
}
