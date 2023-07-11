import { Dialog, Stack, styled } from '@mui/material'

export const ModalWrapper = styled(Dialog)(({ theme }) => ({
  borderRadius: '16px',

  '&&': {
    '&': {
      '.MuiDialog-paper': {
        minWidth: '500px',
        [theme.breakpoints.down('sm')]: { minWidth: 0 },
      },
    },
  },
}))

export const ModalTitleContainer = styled(Stack)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`
