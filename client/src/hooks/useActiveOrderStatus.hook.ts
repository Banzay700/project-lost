import { OderStoreStatusType } from 'types'
import { useOrderReducer } from 'hooks/useOrderReducer.hook'
import { useEffect } from 'react'
import { useRootLocationPath } from 'hooks/useRootLocationPath.hook'

type OrderStatusType = OderStoreStatusType | undefined

export const useActiveOrderStatus = (orderStatus?: OrderStatusType) => {
  const { activeOrder, switchOrderStatus } = useOrderReducer()
  const { isHomeLocation } = useRootLocationPath()
  const isDishButton = activeOrder.storeStatus === 'open' || activeOrder.storeStatus === 'update'

  useEffect(() => {
    if (orderStatus) {
      if (!isHomeLocation) {
        switchOrderStatus(orderStatus)
      }
    }
  })

  return { isDishButton }
}
