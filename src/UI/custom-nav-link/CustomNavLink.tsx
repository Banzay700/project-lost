import { FC, PropsWithChildren } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

interface CustomNavLinkProps extends PropsWithChildren {
  linkTo: string
  className?: string
  isActiveClassName?: string
  registeredPathname?: string
  registeredLinkTo?: string
}

const CustomNavLink: FC<CustomNavLinkProps> = ({
  linkTo,
  className,
  isActiveClassName,
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
    <NavLink
      to={linkTo}
      className={({ isActive }) => (isActive ? cn(className, isActiveClassName) : className)}
      onClick={handleClick}>
      {children}
    </NavLink>
  )
}

export default CustomNavLink
