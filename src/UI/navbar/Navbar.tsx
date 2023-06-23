import { FC } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { LinkItemType } from 'types'
import { NavItem } from './nav-item'
import { NavbarWrapper } from './Navbar.styled'

interface NavbarProps {
  data: LinkItemType[]
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
}

const Navbar: FC<NavbarProps> = ({ direction, data }) => {
  const { breakpoints } = useTheme()
  const isSmallScreen = useMediaQuery(breakpoints.down('sm'))

  return (
    <NavbarWrapper direction={direction}>
      {data.map((item) => (
        <NavItem
          key={item.link}
          data={item}
          variant="h2"
          fontWeight={500}
          variantStyle={isSmallScreen ? 'button' : undefined}
        />
      ))}
    </NavbarWrapper>
  )
}

export default Navbar
