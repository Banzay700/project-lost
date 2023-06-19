import { Stack, styled } from '@mui/material'
import { withProps } from 'utils'

type ItemDayWrapperProps = {
  active: boolean
}

export const WeekWrapper = styled(Stack)`
  //flex-direction: row;
  //justify-content: center;
  //gap: 12px;
  //max-width: 95%;
`
export const WeekInnerWrapper = styled(Stack)()
//   ({ theme }) => `
//   flex-direction: row;
//   border: 1px solid ${theme.palette.primary.lightGrey};
//   border-radius: 16px;
// `,

export const ItemWrapper = styled(Stack)`
  //width: 64px;
  //height: 64px;
  //align-items: center;
  //justify-content: center;
  //background-color: transparent;
`

export const ItemDayWrapper = styled(
  ItemWrapper,
  withProps('active'),
)<ItemDayWrapperProps>(
  ({ active, theme }) => `
//   cursor: pointer;
//   gap: 2px;
//   background-color: ${active ? theme.palette.primary.extraLight : 'transparent'}
// `,
)
