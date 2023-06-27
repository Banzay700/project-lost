import { Stack, styled } from '@mui/material'

export const HeaderActionsWrapper = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.addition,
  order: 3,
  flexBasis: '100%',
  flexDirection: 'row',
  alignItems: 'center',

  '&&': {
    button: {
      color: theme.palette.text.addition,
      borderColor: theme.palette.border.white,
    },
  },
}))
