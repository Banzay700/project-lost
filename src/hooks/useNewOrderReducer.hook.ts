import { useAppDispatch, useAppSelector } from 'hooks/useRedux.hook'
import { openNewOrder } from 'store/reducers'

import { NewlyOrderType } from 'store/reducers/newlyCreatedOrder.slice'

export const useNewOrderReducer = () => {
  const dispatch = useAppDispatch()
  const newlyOrder = useAppSelector((state) => state.newlyOrder.newlyOrder)
  const createNewOrder = (order: NewlyOrderType) => dispatch(openNewOrder(order))

  return { newlyOrder, createNewOrder }
}
