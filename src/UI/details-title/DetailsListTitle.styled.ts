import { Box } from '@mui/material'
import styled from 'styled-components'
import { theme } from 'theme/index'

export const DetailsListTitleWrapper = styled(Box)`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid ${theme.palette.text.border.primary};
  border-bottom: 1px solid ${theme.palette.text.border.primary};
`
