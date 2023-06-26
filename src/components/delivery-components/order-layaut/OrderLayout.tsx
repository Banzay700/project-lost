import { FC, PropsWithChildren } from 'react'
import { HeaderActionMobile, Header, AdaptiveHeaderWrapper } from 'components'

interface OrderLayoutProps extends PropsWithChildren {
  titleHeader: string
}

const OrderLayout: FC<OrderLayoutProps> = ({ titleHeader, children }) => {
  return (
    <>
      <Header routeLogoStyle="Delivery" withoutLink>
        <HeaderActionMobile label={titleHeader} />
      </Header>
      <AdaptiveHeaderWrapper>{children}</AdaptiveHeaderWrapper>
    </>
  )
}

export default OrderLayout
