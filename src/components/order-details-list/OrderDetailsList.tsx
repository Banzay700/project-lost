import { FC } from 'react'
import { OrderItemPropsType } from 'types'
import { DetailsListTitle } from 'UI'
import { OrderDetailsItem } from './order-details-item'
import s from './OrderDetailsList.module.scss'

interface OrderListProps {
  orderItems: OrderItemPropsType[]
  isPicker?: boolean
  onChange?: (props: { id: string; price: number }) => void
  orderId?: string
}

const OrderDetailsList: FC<OrderListProps> = ({ orderItems, isPicker, orderId, onChange }) => {
  return (
    <>
      <DetailsListTitle title="Order details" orderId={orderId} />
      <div className={s.wrapper}>
        {orderItems.map(({ id, title, price, src }) => (
          <OrderDetailsItem
            key={id}
            id={id}
            title={title}
            price={price}
            src={src}
            isPicker={isPicker}
            onChange={onChange}
          />
        ))}
      </div>
    </>
  )
}

export default OrderDetailsList
