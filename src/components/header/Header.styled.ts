import { Stack } from '@mui/material'
import styled from 'styled-components'
import { theme } from 'theme'

export const HeaderWrapper = styled(Stack)`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${theme.palette.text.border.primary};
`
