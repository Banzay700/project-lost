import styled from 'styled-components'
import { theme } from 'theme/index'

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${theme.palette.primary.main};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    box-shadow: inset 0 0 20px ${theme.palette.primary.main};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
export default Loader
