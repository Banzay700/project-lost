import { FC } from 'react'
import { Stack } from '@mui/material'
import { LinkType } from 'types'
import { NavItem } from './nav-item'

interface NavbarProps {
  data: LinkType[]
  spacing?: number
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
}

const Navbar: FC<NavbarProps> = ({ spacing, direction, data }) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      {data.map((item) => (
        <NavItem
          key={item.link}
          data={item}
          variant="h2"
          fontWeight={500}
          className="navItem"
          active="activeLink"
        />
      ))}
    </Stack>
  )
}

export default Navbar