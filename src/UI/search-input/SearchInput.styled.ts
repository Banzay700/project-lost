import styled from 'styled-components'
import { FormControl, InputBase } from '@mui/material'
import { theme } from 'theme'

export const FormControlWrapper = styled(FormControl)`
  width: 100%;
  justify-content: center;
`
export const InputWrapper = styled(InputBase)`
  &:focus-within svg {
    transition: all 0.1s ease-in-out;
    color: ${theme.palette.primary.main};
  }
`
