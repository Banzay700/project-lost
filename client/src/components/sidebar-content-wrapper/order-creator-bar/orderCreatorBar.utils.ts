import dayjs from 'dayjs'
import { emptyOrderState } from 'store/reducers/reducers.utils'
import { DeliveryCreateItemType, DeliveryFormType } from 'types'

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

export const prepareDeliveryInfo = (id: string, data: DeliveryFormType): DeliveryCreateItemType => {
  const { time, clientInfo, ...rest } = data
  const { description, ...others } = clientInfo

  const currentTime = dayjs()
  const deliveryTime = currentTime.add(Number(time), 'minutes').unix()

  const commonData = { order: id, time: deliveryTime, ...rest }

  return {
    ...commonData,
    clientInfo: !clientInfo.description?.length ? others : clientInfo,
  }
}

export const updateOrderState = ({ orderType, table, user }: UpdateOrderStateProps) => {
  const orderNumber = unique()

  return { ...emptyOrderState, orderType, table, orderNumber, user, storeStatus: 'open' as const }
}
