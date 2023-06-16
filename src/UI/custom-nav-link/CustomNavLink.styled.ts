import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from 'theme/index'

interface NavLinkWrapperProps {
  $variant?: 'sidebarTabs' | 'tabs'
}

const commonStyles = css`
  display: flex;
  align-items: center;
  color: ${theme.palette.text.primary};
`

const styleVariantSidebarTabs = css`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 12px 6px;
  border-radius: 8px;
  gap: 8px;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: ${theme.palette.text.gradient};
    color: ${theme.palette.primary.contrastText};
  }

  &.active {
    background: ${theme.palette.text.gradient};
    color: ${theme.palette.primary.contrastText};
  }
`
const styleVariantTabs = css`
  width: 100%;
  height: 100%;
  padding: 14px 18px;

  &:hover {
    color: ${theme.palette.primary.main};
    background: rgba(255, 92, 0, 0.2);
  }

  &.active {
    color: ${theme.palette.primary.main};
    background: rgba(255, 92, 0, 0.2);

    &:after {
      content: '';
      width: 4px;
      height: 100%;
      color: ${theme.palette.primary.main};

      position: absolute;
      right: -1px;
      top: 0;
    }
  }
`

const styleVariantNotTabs = css`
  &.active {
    color: ${theme.palette.primary.main};
  }
`

export const NavLinkWrapper = styled(NavLink)<NavLinkWrapperProps>`
  ${commonStyles}

  ${({ $variant }) => $variant === 'sidebarTabs' && styleVariantSidebarTabs}
  ${({ $variant }) => $variant === 'tabs' && styleVariantTabs}
  ${({ $variant }) => !$variant && styleVariantNotTabs}
`
