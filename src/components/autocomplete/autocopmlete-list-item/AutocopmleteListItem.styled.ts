import { ListItem, styled } from '@mui/material'

export const AutocompleteListItemSuggestion = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'block',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.lightGrey,
  },
  '& small': {
    color: theme.palette.text.grey,
    marginTop: theme.spacing(1),
  },
  '&:active': {
    backgroundColor: theme.palette.primary.extraLight,
  },
}))
