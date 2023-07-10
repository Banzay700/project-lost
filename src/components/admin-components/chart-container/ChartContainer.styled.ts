import { Stack, styled } from '@mui/material'
import { withProps } from 'utils/withProps'

interface ChartsContainerProps {
  size: number
}

export const ChartsContainer = styled(
  Stack,
  withProps('size'),
)<ChartsContainerProps>(({ size }) => ({
  position: 'relative',
  width: `${size * 10}%`,
  justifyContent: 'center',
}))

export const ChartItem = styled(Stack)(({ theme }) => ({
  position: 'relative',
  padding: '10px',
  height: '100%',
  boxShadow: '0px 8px 16px 0px rgba(96, 97, 112, 0.16), 0px 2px 4px 0px rgba(40, 41, 61, 0.04)',
  borderRadius: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '340px',
  flex: 1,
  width: '100%',
  backgroundColor: theme.palette.background.default,
}))
