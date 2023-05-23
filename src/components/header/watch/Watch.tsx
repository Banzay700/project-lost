import { FC, MouseEvent, useEffect, useState } from 'react'
import { Stack, Avatar, Box, Menu } from '@mui/material'
import { Button, MenuItem } from 'UI'

import { DataUserType, LinkType } from 'types'
import { stringAvatar, menuData } from './watch.utils'
import s from './Watch.module.scss'

interface WatchProps {
  dataUser: DataUserType
}

const Watch: FC<WatchProps> = ({ dataUser }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { name, surname, src } = dataUser
  const open = Boolean(anchorEl)

  const avatarName = !!name && !!surname && { ...stringAvatar(`${name} ${surname}`) }

  const handleClickAvatar = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)

  const handleCloseAvatar = () => setAnchorEl(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Stack spacing={3.2} direction="row">
      <Box className={s.time} color="text.secondary">
        {currentDateTime.toLocaleString()}
      </Box>
      <Box>
        <Button
          variant="text"
          size="default"
          color="secondary"
          onClick={handleClickAvatar}
          icon={<Avatar src={src} {...avatarName} />}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleCloseAvatar}>
          {menuData.map((item) => (
            <MenuItem data={item} key={item.text} onClose={handleCloseAvatar} />
          ))}
        </Menu>
      </Box>
    </Stack>
  )
}

export default Watch
