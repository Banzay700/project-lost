import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from 'theme'

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.palette.primary.main};
`
