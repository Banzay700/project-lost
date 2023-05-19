import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LogoCocaImg, LogoCocaText } from 'assets'
import s from './Logo.module.scss'

interface LogoProps {
  link: string
  classImg: string
  classText: string
  view: 'img' | 'text' | 'both'
}

const Logo: FC<LogoProps> = ({ link, classText, classImg, view }) => {
  const viewImg = view === 'img' || view === 'both'
  const viewText = view === 'text' || view === 'both'

  return (
    <Link to={link} className={s.logo}>
      {viewImg && <LogoCocaImg className={s[classImg]} />}
      {viewText && <LogoCocaText className={s[classText]} />}
    </Link>
  )
}

export default Logo
