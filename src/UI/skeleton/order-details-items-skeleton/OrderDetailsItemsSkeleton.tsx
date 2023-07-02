import { Skeleton, Stack } from '@mui/material'
import { FC } from 'react'
import { generateArray } from 'utils'
import {
  CardMediaWrapper,
  OrderDetailsItemsSkeletonWrapper,
} from './OrderDetailsItemsSkeleton.styled'

const OrderDetailsItemsSkeleton: FC = () => {
  const generateArr = generateArray(4)

  return (
    <>
      {generateArr.map((item) => (
        <OrderDetailsItemsSkeletonWrapper key={item}>
          <CardMediaWrapper />
          <Stack sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Skeleton width="40%" />
            <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-between' }}>
              <Skeleton height="15px" width="30%" />
              <Skeleton height="20px" width="5%" />
            </Stack>
          </Stack>
        </OrderDetailsItemsSkeletonWrapper>
      ))}
    </>
  )
}

export default OrderDetailsItemsSkeleton
