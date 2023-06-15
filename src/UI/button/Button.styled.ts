import { Button } from '@mui/material'
import styled from 'styled-components'

export const ButtonWrapper = styled(Button)`
  border-radius: 58px;
  box-shadow: none;
  min-width: 0;

  &:focus {
    box-shadow: none;
  }

  &:hover {
    box-shadow: none;
  }

  && {
    &.MuiButton-sizeSmall {
      padding: 8px;
    }

    &.MuiButton-sizeMedium {
      padding: 12px;
    }
  }
`
