import { FC, PropsWithChildren } from 'react'
import { DeliveryWrapper, HeaderActionMobile, Header } from 'components'

interface OrderLayoutProps extends PropsWithChildren {
  titleHeader: string
}

const OrderLayout: FC<OrderLayoutProps> = ({ titleHeader, children }) => {
  return (
    <>
      <Header route="Delivery" withoutLink>
        <HeaderActionMobile label={titleHeader} />
      </Header>
      <DeliveryWrapper>{children}</DeliveryWrapper>
    </>
  )
}

export default OrderLayout
