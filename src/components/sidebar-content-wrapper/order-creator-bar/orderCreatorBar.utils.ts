import { OrderCreatorFormReturnType } from 'types/ComponentsReturnType'
import { emptyOrderState } from 'store/reducers/reducers.utils'

export const toggleMenuValues = [
  { label: 'Order info', value: 'orderInfo' },
  { label: 'Dishes', value: 'dishes' },
]

export const unique = () => {
  return Math.floor(Math.random() * 9000) + 1000
}

export const updateOrderState = ({ orderType, table }: OrderCreatorFormReturnType) => {
  const orderNumber = unique()

  return { ...emptyOrderState, orderType, table, orderNumber, storeStatus: 'open' as const }
}
