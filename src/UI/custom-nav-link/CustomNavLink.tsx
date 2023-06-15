import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLinkWrapper } from './CustomNavLink.styled'

export interface CustomNavLinkProps extends PropsWithChildren {
  linkTo: string
  variant?: 'sidebarTabs' | 'tabs'
  registeredPathname?: string
  registeredLinkTo?: string
}

const CustomNavLink: FC<CustomNavLinkProps> = ({
  linkTo,
  variant,
  children,
  registeredPathname,
  registeredLinkTo,
}) => {
  const { pathname } = useLocation()

  const isActiveLink = (): boolean => {
    if (pathname === '/home/pizza' && linkTo === '/home') {
      return true
    }

    if (pathname === registeredPathname && linkTo === registeredLinkTo) return true

    return pathname === linkTo
  }

  const handleClick = (event: { preventDefault: () => void }) => {
    if (isActiveLink()) {
      event.preventDefault()
    }
  }

  return (
    <NavLinkWrapper to={linkTo} variant={variant} onClick={handleClick}>
      {children}
    </NavLinkWrapper>
  )
}

export default CustomNavLink
