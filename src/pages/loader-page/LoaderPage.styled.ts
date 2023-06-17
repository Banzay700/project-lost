import { Stack } from '@mui/material'
import styled from 'styled-components'

export const LoaderPageWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: url(/login-background_11zon2.webp) center center / cover no-repeat; //TODO не совсем ясно как работает
  image-rendering: pixelated;
`
