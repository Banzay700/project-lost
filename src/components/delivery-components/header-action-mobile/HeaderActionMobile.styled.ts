import { Stack, styled } from '@mui/material'

export const HeaderActionsWrapper = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.addition,
  order: 3,
  flexBasis: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: '38px',

  '&&': {
    button: {
      color: theme.palette.text.addition,
      borderColor: theme.palette.border.white,
    },
  },
}))
