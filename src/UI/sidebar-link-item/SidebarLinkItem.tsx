import { FC, useEffect, useState } from 'react'
import { ListItem, Stack, Typography } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import s from './SidebarLinkItem.module.scss'

interface SidebarLeftItemProps {
  label: string
  linkTo: string
  icon: string
  className?: string
}
const SidebarLinkItem: FC<SidebarLeftItemProps> = ({ label, linkTo, icon, className }) => {
  const [svgContent, setSvgContent] = useState('')

  const fetchSvg = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_STATIC}/${icon}`)
      const json = await response.text()
      setSvgContent(json)
    } catch (error) {
      console.error('Ошибка загрузки SVG файла', error)
    }
  }

  useEffect(() => {
    if (!svgContent) fetchSvg()
  }, [fetchSvg]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ListItem className={cn(s.item, className)} sx={{ maxWidth: 77 }}>
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? cn(s.link, s.activeLink) : s.link)}>
        <Stack dangerouslySetInnerHTML={{ __html: svgContent }} />
        <Typography variant="subtitle1" component="p">
          {label}
        </Typography>
      </NavLink>
    </ListItem>
  )
}

export default SidebarLinkItem
