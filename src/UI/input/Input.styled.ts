import styled, { css } from 'styled-components'
import { TextField } from '@mui/material'

interface InputWrapperProps {
  inputStyle?: 'withIcon' | 'outlined'
}

const StyleWithIcon = css`
  && {
    &.MuiInputBase-input {
      padding: 12px 16px 12px 0;
    }
  }
`

const StyleOutlined = css`
  && {
    &.MuiOutlinedInput-notchedOutline {
      border: 0;
    }

    &.MuiInputBase-input {
      text-align: center;
    }
  }
`

export const InputWrapper = styled(TextField)<InputWrapperProps>`
  ${({ inputStyle }) => (inputStyle === 'withIcon' ? StyleWithIcon : StyleOutlined)}
`
