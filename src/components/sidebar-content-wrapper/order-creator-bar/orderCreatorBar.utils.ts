import { emptyOrderState } from 'store/reducers/reducers.utils'

interface UpdateOrderStateProps {
  orderType: string
  table: string
  user: string
}

export const toggleMenuValues = [
  { label: 'Order info', value: 'orderInfo' },
  { label: 'Dishes', value: 'dishes' },
]

export const unique = () => {
  return Math.floor(Math.random() * 9000) + 1000
}

export const updateOrderState = ({ orderType, table, user }: UpdateOrderStateProps) => {
  const orderNumber = unique()

  return { ...emptyOrderState, orderType, table, orderNumber, user, storeStatus: 'open' as const }
}
