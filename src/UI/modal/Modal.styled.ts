import styled from 'styled-components'
import { Dialog, Stack } from '@mui/material'

export const ModalWrapper = styled(Dialog)`
  border-radius: 16px;

  && {
    &.MuiPaper-root {
      min-width: 500px;
    }
  }
`

export const ModalTitleContainer = styled(Stack)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`
