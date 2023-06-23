import styled from 'styled-components'
import { Stack } from '@mui/material'

export const RadioGroupCardWrapper = styled(Stack)`
  flex: 1;
  padding: 10px;

  & .MuiFormControl-root {
    margin-top: 16px;
  }
  & .MuiFormControl-root:first-child {
    margin-top: 0;
  }
`
