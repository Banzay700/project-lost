import { MenuItem, Select, styled, css } from '@mui/material'
import { theme } from 'theme'
import { withProps } from 'utils'

const selectDefault = css({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
    borderColor: theme.palette.border.dark,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid',
    borderColor: theme.palette.border.accent,
  },
})

const selectActiveStyle = css({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.accent,
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid',
    borderColor: theme.palette.border.accent,
  },
})

export const SelectWrapper = styled(Select, withProps('active'))<{ active?: boolean }>`
  ${({ active }) => (active ? selectActiveStyle : selectDefault)}
`

export const MenuItemWrapper = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    borderRadius: 16,
    margin: '6px 8px',
    border: '1px solid',
    borderColor: theme.palette.border.default,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.accent,
    border: '1px solid',
    borderColor: theme.palette.border.accent,
    color: theme.palette.primary.light,
  },
}))
