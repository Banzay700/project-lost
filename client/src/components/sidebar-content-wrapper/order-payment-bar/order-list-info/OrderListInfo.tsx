import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderSummaryWrapper, OrderDetailsItem } from 'components'
import { useSmoothScrollbar } from 'hooks'
import { BillsType } from 'types'
import { TAX } from 'utils'
import { Icon } from 'assets'

interface OrderListInfoProps {
  newBill: BillsType
}

const OrderListInfo: FC<OrderListInfoProps> = ({ newBill }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const { dishes, tip, paymentMethod, email } = newBill
  const total = dishes?.reduce((acc, item) => acc + (item.dishTotalPrice ?? 0), 0)

  return (
    <>
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1 }}>
        <Box sx={{ height: '200px' }}>
          {dishes?.map(({ dishID, title, amount, picture, dishTotalPrice }) => (
            <OrderDetailsItem
              key={dishID}
              id={dishID}
              src={picture}
              title={title}
              total={dishTotalPrice}
              amount={amount}
            />
          ))}
          {!dishes?.length && (
            <Stack width="100%" sx={{ marginTop: '20px' }} alignItems="center">
              <Icon.NotDataFound style={{ transform: 'scale(0.5)' }} />
            </Stack>
          )}
        </Box>
      </div>
      <Box sx={{ p: '16px 16px 30px', borderTop: '1px solid #e4e4e4' }}>
        {total && (
          <OrderSummaryWrapper
            tax={TAX}
            total={total}
            tip={tip}
            paymentMethod={paymentMethod}
            email={email}
          />
        )}
      </Box>
    </>
  )
}

export default OrderListInfo
