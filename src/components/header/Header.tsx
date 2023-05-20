import { FC, ReactNode } from 'react'
import s from './Header.module.scss'

interface HeaderProps {
  className: string
  children: ReactNode
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  return <header className={s[className]}>{children}</header>
}

export default Header
