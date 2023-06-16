import styled from 'styled-components'
import { Stack } from '@mui/material'

export const PickerWrapper = styled(Stack)`
  width: fit-content;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`

export const ValueWrapper = styled(Stack)`
  min-width: 22px;
  flex-direction: row;
  justify-content: center;
  user-select: none;
`
