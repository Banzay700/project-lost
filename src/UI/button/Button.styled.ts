import { Button } from '@mui/material'
import styled, { css } from 'styled-components'

interface ButtonProps {
  $blur?: boolean
  $filterMenuStyle?: boolean
}

const StyleBlur = css`
  background: rgba(67, 67, 67, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(8px);
`

const FilterMenuStyle = css`
  border-radius: 40px;
  transition: 0.5s;
`

export const ButtonWrapper = styled(Button)<ButtonProps>`
  border-radius: 58px;
  box-shadow: none;
  min-width: 0;
  ${({ $blur }) => $blur && StyleBlur}
  &:focus {
    box-shadow: none;
  }

  &:hover {
    box-shadow: none;
  }

  && {
    &.MuiButton-sizeSmall {
      padding: ${({ $filterMenuStyle }) => ($filterMenuStyle ? '8px 16px' : '8px')};
    }

    &.MuiButton-sizeMedium {
      padding: 12px;
    }
  }

  ${({ $filterMenuStyle }) => $filterMenuStyle && FilterMenuStyle}
`
