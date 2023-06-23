import { FC } from 'react'
import { IndicatorsGroup, RadioGroupCard } from 'components'
import { Button, PageActionsBar } from 'UI'
import { DeliveryHomePageWrapper } from './DeliveryHomePage.styled'
import { deliveryIndicatorItems } from './deliveryHomePage.utils'

const DeliveryHomePage: FC = () => {
  return (
    <DeliveryHomePageWrapper>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      <RadioGroupCard />
      <Button variant="contained" size="medium">
        Detail Info
      </Button>
    </DeliveryHomePageWrapper>
  )
}

export default DeliveryHomePage
