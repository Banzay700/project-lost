import React, { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Clock, Home, Note, Receipt } from 'assets'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import s from './Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <Stack spacing={6.4} direction="row">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? cn(s.navItem, s.activeLink) : s.navItem)}>
        <Home style={{ marginRight: '8px' }} />
        <Typography variant="h2" fontWeight={500}>
          Home
        </Typography>
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive }) => (isActive ? cn(s.navItem, s.activeLink) : s.navItem)}>
        <Receipt style={{ marginRight: '8px' }} />
        <Typography variant="h2" fontWeight={500}>
          Order
        </Typography>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? cn(s.navItem, s.activeLink) : s.navItem)}>
        <Clock style={{ marginRight: '8px' }} />
        <Typography variant="h2" fontWeight={500}>
          History
        </Typography>
      </NavLink>
      <NavLink
        to="/bills"
        className={({ isActive }) => (isActive ? cn(s.navItem, s.activeLink) : s.navItem)}>
        <Note style={{ marginRight: '8px' }} />
        <Typography variant="h2" fontWeight={500}>
          Bills
        </Typography>
      </NavLink>
    </Stack>
  )
}

export default Navbar
