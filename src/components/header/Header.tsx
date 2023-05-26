import { FC } from 'react'
import { Indicator, Navbar } from 'UI'
import { Watch } from './watch'
import { LogoWrapper } from './logo-wrapper'
import { mockUser, navData } from './header.util'
import s from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={s.header}>
      <LogoWrapper />
      <Navbar direction="row" data={navData} spacing={6.4} />
      <Watch dataUser={mockUser} />
    </header>
  )
}

export default Header
