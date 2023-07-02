import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AdaptiveHeaderWrapper, Header } from 'components'
import { navData } from './deliveryLayout.utils'

const DeliveryLayout: FC = () => {
  return (
    <>
      <Header dataLink={navData} routeLogoStyle="Delivery" />
      <AdaptiveHeaderWrapper direction="row">
        <Outlet />
      </AdaptiveHeaderWrapper>
    </>
  )
}

export default DeliveryLayout
