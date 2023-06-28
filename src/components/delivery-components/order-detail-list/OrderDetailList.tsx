import { FC } from 'react'
import { OrderType } from 'types'
import { OrderDetailsItem } from 'components'
import { useSmoothScrollbar } from 'hooks'
import { OrderDetailListTitle, OrderDetailListWrapper } from './OrderDetailList.styled'

interface OrderDetailListProps {
  ordersDetail?: OrderType
}

const OrderDetailList: FC<OrderDetailListProps> = ({ ordersDetail }) => {
  const refObject = useSmoothScrollbar<HTMLDivElement>('2px')

  return (
    <>
      <OrderDetailListTitle
        variant="h2"
        color="secondary"
        fontWeight="600"
        sx={{ margin: '0 20px', pb: '5px', borderBottom: '1px solid #e4e4e4' }}>
        Detail order
      </OrderDetailListTitle>
      <OrderDetailListWrapper ref={refObject}>
        {ordersDetail?.dishes?.map((item) => (
          <OrderDetailsItem
            key={item.dishID}
            id={item.dishID}
            title={item.title}
            src={item.picture}
            total={item.dishTotalPrice}
            amount={item.amount}
          />
        ))}
      </OrderDetailListWrapper>
    </>
  )
}

export default OrderDetailList
