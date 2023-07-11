import { FC } from 'react'
import { Skeleton, Stack, Typography } from '@mui/material'
import { generateArray } from 'utils'
import { DishesListSkeletonWrapper } from './DishesListSkeleton.styled'

const DishesListSkeleton: FC = () => {
  const generateArr = generateArray(12)

  return (
    <>
      {generateArr.map((item) => (
        <DishesListSkeletonWrapper key={item}>
          <Stack spacing="12px" height="100%">
            <Skeleton
              animation="wave"
              height="158px"
              sx={{
                borderRadius: '12px',
                minHeight: '158px',
                maxHeight: '158px',
                flex: 1,
                transform: 'none',
              }}
            />
            <Stack
              spacing="8px"
              sx={{ transition: '1s', height: '100%', justifyContent: 'space-between' }}>
              <Typography component="p" width="70%">
                <Skeleton />
              </Typography>
              <Typography component="p" width="30%">
                <Skeleton />
              </Typography>
              <Typography component="p" width="30%">
                <Skeleton />
              </Typography>
            </Stack>
          </Stack>
        </DishesListSkeletonWrapper>
      ))}
    </>
  )
}

export default DishesListSkeleton
