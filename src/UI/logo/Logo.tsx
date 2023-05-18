import { FC } from 'react'
import { Link } from 'react-router-dom'
import { CocaImg, CocaText } from 'assets'
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
      {viewImg && <CocaImg className={s[classImg]} />}
      {viewText && <CocaText className={s[classText]} />}
    </Link>
  )
}

export default Logo
