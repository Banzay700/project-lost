import { ActionsButton, RadioGroupCard } from 'components'
import { FC, useState } from 'react'
import { DeliveryType, RadioButtonCardContentItemType } from 'types'
import { useNavigate } from 'react-router-dom'

interface ContentDeliveryMobileProps {
  cardItem?: DeliveryType[]
}

const ContentRouteDeliveryMobile: FC<ContentDeliveryMobileProps> = ({ cardItem }) => {
  const [isActiveCard, setIsActiveCard] = useState('')
  const navigate = useNavigate()

  const handleChangeActiveCard = (value: string) => {
    setIsActiveCard(value)
  }

  const handleSubmitCard = () => {
    navigate(isActiveCard)
  }

  return (
    <>
      <RadioGroupCard
        isActiveCard={isActiveCard}
        onChange={handleChangeActiveCard}
        cardData={cardItem}
      />
      <ActionsButton
        titleButton="Detail Info"
        onSubmit={handleSubmitCard}
        disabled={!isActiveCard}
      />
    </>
  )
}

export default ContentRouteDeliveryMobile
