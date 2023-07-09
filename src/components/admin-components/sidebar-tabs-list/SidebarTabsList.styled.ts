import { List, ListSubheader, styled } from '@mui/material'

export const SidebarTabsListWrapper = styled(List)(({ theme }) => ({
  width: '300px',
  minWidth: '300px',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  borderRight: `1px solid ${theme.palette.border.default}`,

  [theme.breakpoints.down('lg')]: { width: '250px', minWidth: '250px' },
}))

export const SidebarSubheaderWrapper = styled(ListSubheader)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '17.5px 18px',
  borderBottom: `1px solid ${theme.palette.border.default}`,
}))
