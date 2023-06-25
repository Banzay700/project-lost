import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { DeliveryWrapper, Header } from 'components'
import { navData } from './deliveryLayout.utils'

const DeliveryLayout: FC = () => {
  return (
    <>
      <Header dataLink={navData} route="Delivery" />
      <DeliveryWrapper>
        <Outlet />
      </DeliveryWrapper>
    </>
  )
}

export default DeliveryLayout
