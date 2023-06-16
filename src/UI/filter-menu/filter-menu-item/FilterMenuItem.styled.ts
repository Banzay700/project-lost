import styled from 'styled-components'
import { Button } from 'UI'

export const FilterMenuItemWrapper = styled(Button)`
  border-radius: 40px;
  transition: 0.5s;

  &&& {
    &.MuiButton-sizeMedium {
      padding: 8px 16px;
    }
  }
`
