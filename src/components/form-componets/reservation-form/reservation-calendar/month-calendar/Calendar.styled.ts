import { styled } from '@mui/material'
import { Icon } from 'assets'

export const MainWrapper = styled('div')`
  width: 240px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: -6px 7px 54px -24px rgba(0, 0, 0, 0.5);
  user-select: none;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 10;
`
export const CalendarHeaderWrapper = styled('div')(
  ({ theme }) => `
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 14px;
color: 1px solid ${theme.palette.primary.main};
`,
)

export const LeftArrow = styled(Icon.Arrow)(
  ({ theme }) => `
rotate: 180deg;
cursor: pointer;
fill: ${theme.palette.primary.main};
`,
)

export const RightArrow = styled(Icon.Arrow)(
  ({ theme }) => `
  margin-top: -1px;
  cursor: pointer;
  fill: ${theme.palette.primary.main};
  `,
)

export const WeekDaysWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const WeekDayCell = styled('div')(
  ({ theme }) => `
    height: 30px;
    width: 30px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.text.grey};
  `,
)

export const CalendarContentWrapper = styled('div')`
  display: flex;
  flex-direction: row;
`
export const CalendarDayCell = styled('div')(
  ({ theme }) => `
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    background-color: rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(
    theme.palette.primary.main.slice(3, 5),
    16,
  )}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.15);
  }
    `,
)
