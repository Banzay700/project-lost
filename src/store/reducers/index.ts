export {
  default as ordersReducer,
  openNewOrder,
  addDishToOrder,
  addOrderToActive,
  changeOrderStatus,
  deleteNewOrder,
} from './order.slice'
export { default as billReducer, addBill } from './bill.slice'
export { default as userReducer, setUserLogout, updateUserData, setUserData } from './user.slice'
