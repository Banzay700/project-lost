import { FC } from 'react'
import { OrderDetailsItemType } from 'types'
import { OrderDetailsItem } from 'components'
import { useSmoothScrollbar } from 'hooks'
import { OrderDetailListTitle, OrderDetailListWrapper } from './OrderDetailList.styled'

interface OrderDetailListProps {
  ordersDetail?: OrderDetailsItemType[]
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
        {ordersDetail?.map((item) => (
          <OrderDetailsItem
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.src}
            total={item.total}
            amount={item.amount}
          />
        ))}
      </OrderDetailListWrapper>
    </>
  )
}

export default OrderDetailList
