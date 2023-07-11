import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from 'theme'

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: ${theme.palette.primary.main};

  @media (max-width: 768px) {
    color: ${theme.palette.primary.contrastText};
  }
`
