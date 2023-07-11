import { styled, Stack } from '@mui/material'

export const ChartsWrapper = styled(Stack)`
  height: calc(100% - 167px);
  width: 100%;
  gap: 12px;
`

export const ChartsGroup = styled(Stack)(() => ({
  height: '50%',
  flexDirection: 'row',
  width: '100%',
  gap: '2%',
}))
