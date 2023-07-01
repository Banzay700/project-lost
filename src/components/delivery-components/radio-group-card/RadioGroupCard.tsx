import { FC } from 'react'
import { useSmoothScrollbar } from 'hooks'
import { DeliveryType } from 'types'
import { firstLetterUpperCase, generateStatus, generateTimeString } from 'utils'
import { RadioButtonCardSkeleton } from 'UI/skeleton'
import { Box } from '@mui/material'
import { RadioGroupCardWrapper } from './RadioGroupCard.styled'
import { RadioButtonCard } from './radio-button-card'

interface RadioGroupCardProps {
  isActiveCard?: string
  cardData?: DeliveryType[]
  isLoading?: boolean
  onChange: (value: string) => void
}

const RadioGroupCard: FC<RadioGroupCardProps> = ({
  isActiveCard,
  isLoading,
  cardData,
  onChange,
}) => {
  const refScroll = useSmoothScrollbar<HTMLDivElement>('2px')

  return (
    <Box ref={refScroll} sx={{ flex: 1 }}>
      <RadioGroupCardWrapper>
        {isLoading && <RadioButtonCardSkeleton />}
        {!isLoading &&
          cardData?.map((item) => (
            <RadioButtonCard
              key={item.id}
              id={item.id}
              status={
                item.status === 'closed'
                  ? { label: firstLetterUpperCase(item.status), type: 'green' }
                  : generateStatus(item.time)
              }
              orderNumber={item.order.orderNumber}
              clientName={item.clientInfo.name}
              deliveryAddress={item.address.street}
              timeToReady={item.status === 'closed' ? 'Executed' : generateTimeString(item.time)}
              isChecked={isActiveCard}
              onChange={onChange}
            />
          ))}
      </RadioGroupCardWrapper>
    </Box>
  )
}

export default RadioGroupCard
