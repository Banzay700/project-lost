import { Box, styled } from '@mui/material'

export const GridWrapper = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  padding: 16px;
`
