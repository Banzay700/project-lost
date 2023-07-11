import styled from 'styled-components'
import { Stack } from '@mui/material'

export const RadioGroupCardWrapper = styled(Stack)`
  padding: 20px;
  -webkit-tap-highlight-color: transparent;

  & .MuiFormControl-root {
    margin-top: 16px;
  }
  & .MuiFormControl-root:first-child {
    margin-top: 0;
  }
`
