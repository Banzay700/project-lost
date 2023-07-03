import { useState } from 'react'
import { DeliveryAddressType } from 'types'

export const useGoogleMapStateAction = () => {
  const [state, setState] = useState<DeliveryAddressType>()

  const handleSetStateMap = (address: DeliveryAddressType) => setState(address)

  return { handleSetStateMap, state }
}
