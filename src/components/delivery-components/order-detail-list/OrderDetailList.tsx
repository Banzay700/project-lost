import { FC } from 'react'
import { OrderType } from 'types'
import { OrderDetailsItem } from 'components'
import { useSmoothScrollbar } from 'hooks'
import { Box, Stack } from '@mui/material'
import { OrderDetailsItemsSkeleton } from 'UI'
import { Icon } from 'assets'
import { OrderDetailListTitle, OrderDetailListWrapper } from './OrderDetailList.styled'

interface OrderDetailListProps {
  ordersDetail?: OrderType
  isLoading?: boolean
}

const OrderDetailList: FC<OrderDetailListProps> = ({ ordersDetail, isLoading }) => {
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
      <Box ref={refObject} sx={{ flex: 1 }}>
        <OrderDetailListWrapper>
          {isLoading && <OrderDetailsItemsSkeleton />}
          {!isLoading &&
            ordersDetail?.dishes?.map((item) => (
              <OrderDetailsItem
                key={item.dishID}
                id={item.dishID}
                title={item.title}
                src={item.picture}
                total={item.dishTotalPrice}
                amount={item.amount}
              />
            ))}
          {!isLoading && !ordersDetail?.dishes.length && (
            <Stack width="100%" sx={{ marginTop: '20px' }} alignItems="center">
              <Icon.NotDataFound style={{ transform: 'scale(0.5)' }} />
            </Stack>
          )}
        </OrderDetailListWrapper>
      </Box>
    </>
  )
}

export default OrderDetailList
