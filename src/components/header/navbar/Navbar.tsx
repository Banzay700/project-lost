import React, { FC, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material'
import { Clock, Home, Note, Receipt } from 'assets'
// import s from './Navbar.module.scss'
// interface NavbarProps {
// }

const Navbar: FC = () => {
  const [value, setValue] = useState(0)

  return (
    <Stack spacing={6.4} direction="row">
      {/* Here will be NavLink from react-router */}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue: number): void => {
          setValue(newValue)
        }}>
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Order" icon={<Receipt />} />
        <BottomNavigationAction label="History" icon={<Clock />} />
        <BottomNavigationAction label="Bills" icon={<Note />} />
      </BottomNavigation>
    </Stack>
  )
}

export default Navbar
