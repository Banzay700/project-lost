import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components'
import { navData } from './deliveryLayout.utils'

const DeliveryLayout: FC = () => {
  return (
    <>
      <Header dataLink={navData} route="Delivery" />
      <Outlet />
    </>
  )
}

export default DeliveryLayout
