import { FC } from 'react'
import { useSmoothScrollbar } from 'hooks'
import { RadioButtonCardContentItemType } from 'types'
import { RadioGroupCardWrapper } from './RadioGroupCard.styled'
import { RadioButtonCard } from './radio-button-card'

interface RadioGroupCardProps {
  isActiveCard?: string
  cardData?: RadioButtonCardContentItemType[]
  onChange: (value: string) => void
}

const RadioGroupCard: FC<RadioGroupCardProps> = ({ isActiveCard, cardData, onChange }) => {
  const refScroll = useSmoothScrollbar<HTMLDivElement>('2px')

  return (
    <RadioGroupCardWrapper ref={refScroll}>
      {cardData?.map((item) => (
        <RadioButtonCard
          key={item.value}
          value={item.value}
          status={item.status}
          orderNumber={item.orderNumber}
          clientName={item.clientName}
          deliveryAddress={item.deliveryAddress}
          timeToReady={item.timeToReady}
          isChecked={isActiveCard}
          onChange={onChange}
        />
      ))}
    </RadioGroupCardWrapper>
  )
}

export default RadioGroupCard
