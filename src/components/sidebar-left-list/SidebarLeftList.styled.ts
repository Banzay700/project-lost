import { styled, List } from '@mui/material'
import { LGS_CUSTOM_BREAKPOINT } from 'utils'

export const SidebarWrapper = styled(List)(({ theme }) => ({
  width: '110px',
  height: '100%',
  minWidth: '110px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    width: '90px',
    minWidth: '90px',
    padding: '14px',
    gap: '8px',
  },
  [theme.breakpoints.down(LGS_CUSTOM_BREAKPOINT)]: {
    width: '75px',
    minWidth: '75px',
    padding: '14px 10px',
    gap: '8px',
  },
}))
