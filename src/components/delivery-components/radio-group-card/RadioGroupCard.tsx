import { FC } from 'react'
import { useSmoothScrollbar } from 'hooks'
import { DeliveryType } from 'types'
import { generateStatus, generateTimeString } from 'utils'
import { RadioGroupCardWrapper } from './RadioGroupCard.styled'
import { RadioButtonCard } from './radio-button-card'

interface RadioGroupCardProps {
  isActiveCard?: string
  cardData?: DeliveryType[]
  onChange: (value: string) => void
}

const RadioGroupCard: FC<RadioGroupCardProps> = ({ isActiveCard, cardData, onChange }) => {
  const refScroll = useSmoothScrollbar<HTMLDivElement>('2px')

  return (
    <RadioGroupCardWrapper ref={refScroll}>
      {cardData?.map((item) => (
        <RadioButtonCard
          key={item.id}
          id={item.id}
          status={generateStatus(item.time)}
          orderNumber={item.order.orderNumber}
          clientName={item.clientInfo.name}
          deliveryAddress={item.address.street}
          timeToReady={generateTimeString(item.time)}
          isChecked={isActiveCard}
          onChange={onChange}
        />
      ))}
    </RadioGroupCardWrapper>
  )
}

export default RadioGroupCard
