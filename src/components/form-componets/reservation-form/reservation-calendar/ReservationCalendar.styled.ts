import { Stack, styled } from '@mui/material'
import { IconTickDown } from 'assets/icons'

export const CalendarWrapper = styled('div')`
  position: relative;
`
export const WeekInnerWrapper = styled(Stack)(
  ({ theme }) => `
  flex-direction: row;
  border: 1px solid ${theme.palette.primary.lightGrey};
  border-radius: 16px;
`,
)

export const ItemWrapper = styled(Stack)`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`
export const WeekWrapper = styled(Stack)`
  //flex-direction: row;
  //justify-content: center;
  //margin-top: 12px;
`
export const WeekOuterWrapper = styled(Stack)`
  //flex-direction: column;
  //gap: 12px;
  //max-width: 95%;
`
export const InnerWrapper = styled(Stack)`
  //flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
`
