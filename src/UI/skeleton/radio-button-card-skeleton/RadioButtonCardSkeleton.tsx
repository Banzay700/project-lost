import { FC } from 'react'
import { Skeleton, Stack, Typography } from '@mui/material'
import { generateArray } from 'utils/generateArray'
import { RadioButtonCardSkeletonWrapper } from './RadioButtonCardSkeleton.styled'

const RadioButtonCardSkeleton: FC = () => {
  const generateArr = generateArray(6)

  return (
    <Stack sx={{ gap: '16px' }}>
      {generateArr.map((item) => (
        <RadioButtonCardSkeletonWrapper key={item}>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack width="100%">
              <Typography variant="subtitle1" component="p" color="text.primary" width="40%">
                <Skeleton />
              </Typography>
              <Typography fontSize="16px" component="p" fontWeight="600" width="60%">
                <Skeleton />
              </Typography>
              <Typography variant="subtitle1" component="p" color="text.primary" width="40%">
                <Skeleton />
              </Typography>
            </Stack>
            <Stack justifyContent="space-between" minWidth="93px">
              <Skeleton />
              <Skeleton />
            </Stack>
          </Stack>
        </RadioButtonCardSkeletonWrapper>
      ))}
    </Stack>
  )
}

export default RadioButtonCardSkeleton
