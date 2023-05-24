import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LogoCocaImg, LogoCocaText } from 'assets'
import cn from 'classnames'
import s from './Logo.module.scss'

interface LogoProps {
  link: string
  classImg?: string
  classText?: string
  view: 'img' | 'text' | 'both'
}

const Logo: FC<LogoProps> = ({ link, classText, classImg, view }) => {
  const viewImg = view === 'img' || view === 'both'
  const viewText = view === 'text' || view === 'both'

  return (
    <Link to={link} className={s.logo}>
      {viewImg && <LogoCocaImg className={cn(s.coca, classImg && classImg)} />}
      {viewText && <LogoCocaText className={cn(s.cocaText, classText && classText)} />}
    </Link>
  )
}

export default Logo
