import { Stack, styled } from '@mui/material'
import { Icon } from 'assets'
import { withProps } from 'utils'

export const IndicatorWrapper = styled(Stack)`
  user-select: none;
  white-space: nowrap;
  gap: 8px;
  align-items: center;
  flex-direction: row;
`

export const IndicatorIcon = styled(
  Icon.Indicator,
  withProps('type'),
)(({ type }) => ({
  color: type,
}))
