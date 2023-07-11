import { List, styled } from '@mui/material'

export const AutocompleteList = styled(List)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.background.main,
  height: '150px',
  overflow: 'auto',
  zIndex: 2,
}))
