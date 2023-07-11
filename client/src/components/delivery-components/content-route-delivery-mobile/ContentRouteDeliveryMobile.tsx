import { ActionsButton, RadioGroupCard } from 'components'
import { ChangeEvent, FC, useState } from 'react'
import { DeliveryResponseType } from 'types'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'UI/pagination'

interface ContentDeliveryMobileProps {
  data?: DeliveryResponseType
  isLoading?: boolean
  page?: string | number
  onChangePagination?: (event: ChangeEvent<unknown>, value: number) => void
}

const ContentRouteDeliveryMobile: FC<ContentDeliveryMobileProps> = ({
  data,
  isLoading,
  page,
  onChangePagination,
}) => {
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
        cardData={data?.data}
        isLoading={isLoading}
      />
      {data && onChangePagination && (
        <Pagination
          position="center"
          disabled={data.totalCount > 10}
          page={Number(page)}
          onChange={onChangePagination}
          count={Math.ceil(data.totalCount / 10)}
        />
      )}
      <ActionsButton
        titleButton="Detail Info"
        onSubmit={handleSubmitCard}
        disabled={!isActiveCard}
      />
    </>
  )
}

export default ContentRouteDeliveryMobile
