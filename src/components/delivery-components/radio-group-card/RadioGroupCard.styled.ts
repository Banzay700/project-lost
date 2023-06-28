import styled from 'styled-components'
import { Stack } from '@mui/material'

export const RadioGroupCardWrapper = styled(Stack)`
  flex: 1;
  padding: 0 20px 20px;

  & .MuiFormControl-root {
    margin-top: 16px;
  }
  & .MuiFormControl-root:first-child {
    margin-top: 0;
  }
`
