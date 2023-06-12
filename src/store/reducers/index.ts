export {
  openOrder,
  changeOrderStatus,
  deleteNewOrder,
  addDishToOrder,
  updateDishAmount,
  removeDishOrder,
  default as ordersReducer,
} from './order.slice'

export {
  setUserLogout,
  updateUserData,
  setUserData,
  setUserInfo,
  default as userReducer,
} from './user.slice'

export { openNewBill, default as billReducer } from './bill.slice'
export { changeToggleValue, default as toggleValueBillsReducer } from './toggleValueBills.slice'
export {
  addActiveTable,
  clearActiveTable,
  default as reservationReducer,
} from './reservation.slice'
