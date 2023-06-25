import { FC } from 'react'
import { Typography } from '@mui/material'
import { OrderDetailsItemType } from 'types'
import { OrderDetailsItem } from 'components'
import { useSmoothScrollbar } from 'hooks'
import { OrderDetailListWrapper } from './OrderDetailList.styled'

interface OrderDetailListProps {
  ordersDetail?: OrderDetailsItemType[]
}

const OrderDetailList: FC<OrderDetailListProps> = ({ ordersDetail }) => {
  const refObject = useSmoothScrollbar<HTMLDivElement>('2px')

  return (
    <>
      <Typography
        variant="h2"
        component="p"
        color="secondary"
        fontWeight="600"
        sx={{ margin: '0 20px', pb: '5px', borderBottom: '1px solid #e4e4e4' }}>
        Detail order
      </Typography>
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
