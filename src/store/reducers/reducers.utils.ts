export const emptyOrderState = {
  table: '',
  orderType: '',
  orderNumber: 0,
  dishes: [],
  totalPrice: 0,
  storeStatus: 'none' as const,
}

export const emptyActiveTableState = {
  id: '',
  number: '',
  seats: 0,
  status: '',
  sector: 0,
}
