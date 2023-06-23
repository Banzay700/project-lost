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
  const { orderDB } = convertOrderData(activeOrder)
  const isUpdateStatus = activeOrder.storeStatus === 'update'

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const [updateOrder] = useUpdateOrderMutation()
  const [getTableStatus] = useLazyGetTableStatusQuery()

  const createDeliveryOrder = async () => {
    if (isUpdateStatus) {
      updateOrder(orderDB)
      navigate(ROUTES.ORDERS)
    } else {
      const req = await createOrder(orderDB)
      if ('data' in req) {
        const order = req.data
        openNewOrder(order)
      }
    }
  }

  const createTakeAwayOrder = async () => {
    if (isUpdateStatus) {
      updateOrder(orderDB)
      navigate(ROUTES.ORDERS)
    } else {
      createOrder(orderDB)
      navigate(ROUTES.ORDERS)
    }
  }

  const createDineInOrder = async (changeToggle: (name: string) => void) => {
    const { data } = await getTableStatus(activeOrder.table)

    switch (data) {
      case 'pre-order':
        createOrder(orderDB)
        updateTableStatus(activeOrder.table)
        navigate(ROUTES.ORDERS)
        break

      case 'busy':
        updateOrder(orderDB)
        navigate(ROUTES.ORDERS)
        break

      default:
        changeToggle('orderInfo')
        openNewOrder(emptyOrderState)
        break
    }
  }

  return { createDeliveryOrder, createTakeAwayOrder, createDineInOrder }
}
