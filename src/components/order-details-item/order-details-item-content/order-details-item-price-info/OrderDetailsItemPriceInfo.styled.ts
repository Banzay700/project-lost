import { styled, CardContent, Stack } from '@mui/material'
import { withProps } from 'utils/withProps'

interface CardTextWrapperProps {
  isHomeLocation: boolean
}

export const CardContentWrapper = styled(CardContent)`
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;
  padding: 0;

  &:last-child {
    padding: 0;
  }
`

export const CardTextWrapper = styled(
  Stack,
  withProps('isHomeLocation'),
)<CardTextWrapperProps>(({ isHomeLocation }) => ({
  width: '100%',
  flexDirection: isHomeLocation ? 'column' : 'row',
  alignItems: isHomeLocation ? 'flex-start' : 'center',
  justifyContent: isHomeLocation ? '' : 'space-between',
}))
