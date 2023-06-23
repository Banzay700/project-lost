import { OrderActiveType } from 'types/OrderBillsType'

export const defineButtonText = (order: OrderActiveType): string => {
  const isUpdateStatus = order.storeStatus === 'update'
  const isDeliveryType = order.orderType === 'delivery'

  return isUpdateStatus ? 'Update Order' : isDeliveryType ? 'Add Delivery Info' : 'Create Order'
}
