import { MenuItem, Select } from '@mui/material'
import styled, { css } from 'styled-components'
import { theme } from 'theme'

const selectActiveStyle = css`
  color: #ff5c00;
  background-color: #fff5ee;
  && {
    &.MuiOutlinedInput-notchedOutline {
      border-width: 1px;
      border-color: #ff5c00;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ffa07a;
    }
  }
`
const selectDefaultStyle = css`
  color: #828487;
  background-color: #ffffff;
  && {
    &.MuiOutlinedInput-notchedOutline {
      border-width: 1px;
      border-color: #c2c2c2;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ffa07a;
    }
  }
`

export const SelectWrapper = styled(Select)<{ $active?: boolean }>`
  ${({ $active }) => ($active ? selectActiveStyle : selectDefaultStyle)}
`

export const MenuItemWrapper = styled(MenuItem)`
  && {
    &.MuiMenuItem-root {
      border-radius: 16px;
      margin: 6px 8px;
      border: 1px solid ${theme.palette.text.border};
    }
    &.Mui-selected {
      background-color: #FFF5EE;
      border: 1px solid #FFA07A;
      color: #FFA07A;
    },
  }
`
