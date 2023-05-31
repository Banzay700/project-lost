export {
  default as ordersReducer,
  openOrder,
  changeOrderStatus,
  deleteNewOrder,
  addDishToOrder,
  updateDishAmount,
} from './order.slice'
export { default as billReducer, addBill } from './bill.slice'
export {
  default as userReducer,
  setUserLogout,
  updateUserData,
  setUserData,
  setUserInfo,
} from './user.slice'
