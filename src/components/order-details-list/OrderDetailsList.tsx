import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderSummary } from 'components'
import { Button, DetailsListTitle } from 'UI'
import { IDishes } from 'types/IOrder'
import { OrderDetailsItem } from './order-details-item'
import s from './OrderDetailsList.module.scss'

interface OrderListProps {
  orderItems: IDishes[]
  isPicker?: boolean
  orderId: number
  onClick?: () => void
}

const OrderDetailsList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onClick }) => {
  const total = orderItems.reduce((acc, item) => acc + item.totalPrice, 0)

  return (
    <Stack sx={{ height: '100%' }}>
      <DetailsListTitle title="Order details" orderId={orderId} />
      <div className={s.wrapper}>
        {orderItems.map(({ id, title, src, totalPrice }) => (
          <OrderDetailsItem
            key={id}
            id={id}
            title={title}
            total={totalPrice}
            src={src}
            isPicker={isPicker}
          />
        ))}
      </div>
      <Stack sx={{ gap: '24px', p: '24px', borderTop: '1px solid #e4e4e4' }}>
        <OrderSummary tax={10} total={total} />
        <Button variant="contained" size="default" type="submit" fullWidth onClick={onClick}>
          Submit
        </Button>
      </Stack>
    </Stack>
  )
}

export default OrderDetailsList
