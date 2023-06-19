import { Stack, styled } from '@mui/material'
import { withProps } from 'utils'

type ItemWrapperProps = {
  active: boolean
}

export const ItemWrapper = styled(
  Stack,
  withProps('active'),
)<ItemWrapperProps>(
  ({ active, theme }) => `
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${active ? theme.palette.primary.extraLight : 'transparent'}`,
)
