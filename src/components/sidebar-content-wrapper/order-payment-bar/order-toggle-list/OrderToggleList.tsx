import { FC } from 'react'
import { Box } from '@mui/material'

import { OrderDetailsItem } from 'components/sidebar-content-wrapper/order-creator-bar/order-details-list/order-details-item'
import { OrderSummary } from 'components/order-summary'
import { useSmoothScrollbar } from 'hooks'
import { BillsType } from 'types'

interface OrderToggleListProps {
  newBill: BillsType
}

const OrderToggleList: FC<OrderToggleListProps> = ({ newBill }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const total = newBill.dishes?.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        {/* <Box style={{ height: '200px' }}> */}
        {/*  {newBill.dishes?.map(({ dishID, title, price, amount, picture }) => ( */}
        {/*    <OrderDetailsItem */}
        {/*      key={dishID} */}
        {/*      id={dishID} */}
        {/*      src={picture} */}
        {/*      title={title} */}
        {/*      total={price} */}
        {/*      amount={amount} */}
        {/*    /> */}
        {/*  ))} */}
        {/* </Box> */}
      </div>
      {/* <OrderSummary tax={10} total={total} /> */}
    </>
  )
}

export default OrderToggleList
