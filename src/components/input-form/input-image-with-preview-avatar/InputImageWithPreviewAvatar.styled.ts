import { Box, styled } from '@mui/material'
import { withProps } from 'utils/withProps'

export const InputImageWrapper = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '300px',
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },
}))

export const ImageWrapper = styled('img', withProps('view'))<{ view: 'round' | 'squareRounding' }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ view }) => (view === 'round' ? '50%' : '16px')};
`
