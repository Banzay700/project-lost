import { useNavigate } from 'react-router-dom'

import { useOrderReducer } from 'hooks'
import { ROUTES } from 'routes'
import { convertOrderData } from 'utils'
import {
  useCreateOrderMutation,
  useLazyGetTableStatusQuery,
  useUpdateOrderMutation,
  useUpdateTableStatusMutation,
} from 'store/api'
import { emptyOrderState } from 'store/reducers/reducers.utils'

export const useOrderProcessingLogic = () => {
  const navigate = useNavigate()
  const { activeOrder, openNewOrder } = useOrderReducer()

  const { orderDB, orderActive } = convertOrderData(activeOrder)

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const [updateOrder] = useUpdateOrderMutation()
  const [getTableStatus] = useLazyGetTableStatusQuery()

  return async (trigger: (name: string) => void) => {
    const { data } = await getTableStatus(activeOrder.table)

    switch (data) {
      case 'free':
        trigger('orderInfo')
        openNewOrder(emptyOrderState)
        break

      case 'pre-order':
        createOrder(orderDB)
        updateTableStatus(activeOrder.table)
        navigate(ROUTES.ORDERS)
        break

      case 'busy':
        updateOrder(orderDB)
        openNewOrder(orderActive)
        navigate(ROUTES.ORDERS)
        break

      default:
        if (orderDB.table === '-') {
          createOrder(orderDB)
          updateOrder(orderDB)
          openNewOrder(orderActive)
          navigate(ROUTES.ORDERS)
        }
        break
    }
  }
}
