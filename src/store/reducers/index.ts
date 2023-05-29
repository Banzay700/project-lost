export { default as dishReducer } from './dish.slice'
export { removeAllDishesFromOrder } from './dish.slice'
export {
  default as ordersReducer,
  openNewOrder,
  addDishToOrder,
  addOrderToActive,
} from './order.slice'
export { default as userReducer, setUserLogout, updateUserData, setUserData } from './user.slice'
