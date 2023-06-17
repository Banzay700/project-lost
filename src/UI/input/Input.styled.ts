import { TextField, styled, css } from '@mui/material'

interface InputWrapperProps {
  $styles?: 'withIcon' | 'outlined'
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

export const InputWrapper = styled(TextField, {
  shouldForwardProp: (prop) => prop !== '$styles',
})<InputWrapperProps>`
  ${({ $styles }) => ($styles === 'withIcon' ? StyleWithIcon : StyleOutlined)}
`
