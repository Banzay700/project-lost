import { FC } from 'react'
import { Logo } from './logo'
import { Navbar } from './navbar'
import { DateLogo } from './date-logo'
import s from './Header.module.scss'

// interface HeaderProps {}

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navbar />
      <DateLogo />
    </header>
  )
}

export default Header
