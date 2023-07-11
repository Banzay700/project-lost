import { FC } from 'react'
import { Typography } from '@mui/material'
import { DetailsListTitleWrapper } from './DetailsListTitle.styled'

interface OrderDetailsTitleProps {
  title: string
  orderNumber: number
  staffName?: string
  staffSurname?: string
}

const DetailsListTitle: FC<OrderDetailsTitleProps> = ({
  title,
  orderNumber,
  staffName,
  staffSurname,
}) => {
  return (
    <DetailsListTitleWrapper>
      <Typography variant="h1" component="p" color="secondary">
        {title}
      </Typography>
      {!!orderNumber && (
        <Typography variant="h3" component="p">
          Order # {orderNumber}
        </Typography>
      )}
      {staffName && staffSurname && (
        <Typography variant="subtitle1" component="p">
          Waiter: {staffName} {staffSurname}
        </Typography>
      )}
    </DetailsListTitleWrapper>
  )
}

export default DetailsListTitle
