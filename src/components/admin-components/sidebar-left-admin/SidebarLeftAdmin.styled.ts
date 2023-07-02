import { styled } from '@mui/material'
import { Icon } from 'assets'

export const LogoutIcon = styled(Icon.Logout)(({ theme }) => ({
  width: '35px',
  height: '35px',
  cursor: 'pointer',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}))
