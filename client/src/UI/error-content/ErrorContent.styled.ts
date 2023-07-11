import { Stack, Typography } from '@mui/material'
import styled from 'styled-components'

export const ErrorContentWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  background: url(/login-background.webp) center center / cover no-repeat;
  align-items: center;
  justify-content: center;
`

export const ErrorTitle = styled(Typography)`
  text-align: center;
  font-size: 200px;
  line-height: 1;
`
