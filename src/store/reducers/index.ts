export { default as dishReducer } from './dish.slice'
export { default as ordersReducer } from './order.slice'
export { removeAllDishesFromOrder } from './dish.slice'
export {
  openNewOrder,
  addDishToOrder,
  addOrderToActive,
  changeOrderStatus,
  deleteNewOrder,
} from './order.slice'
export { default as billReducer, addBill } from './bill.slice'