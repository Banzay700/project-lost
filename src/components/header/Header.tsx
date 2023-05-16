import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Logo } from './logo'
import { Navbar } from './navbar'
import { DateLogo } from './date-logo'
import s from './Header.module.scss'

// interface HeaderProps {}

const Header: FC = () => {
  return (
    <Router>
      <header className={s.header}>
        <Logo />
        <Navbar />
        <DateLogo />
      </header>
    </Router>
  )
}

export default Header
