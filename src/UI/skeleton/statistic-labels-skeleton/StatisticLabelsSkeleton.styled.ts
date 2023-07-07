import { styled, Stack } from '@mui/material'

export const HeadersWrapper = styled(Stack)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BottomGroupWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  gap: '5px',
  borderTop: '1px solid',
  paddingTop: '6px',
  borderColor: theme.palette.border.default,
}))
