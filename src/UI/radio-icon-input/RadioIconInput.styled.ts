import styled from 'styled-components'
import { Radio } from '@mui/material'

export const RadioWrapper = styled(Radio)`
  transition: 0.5s;
  border: 1px solid #e4e4e4;
  padding: 12px 4px;
  border-radius: 16px;

  && {
    &.Mui-checked {
      border-color: #ff5c00;
    }
  }
`
