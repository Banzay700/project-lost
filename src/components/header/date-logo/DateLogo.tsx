import { FC, MouseEvent, useEffect, useState } from 'react'
import { Stack, Avatar, Box, MenuItem, Menu } from '@mui/material'
import { Button } from 'UI/button'
import s from './DateLogo.module.scss'

// тут мы будем делать запрос для информации юзера(официанта)

const data = {
  name: 'John',
  surname: 'Robertson',
}

const DateLogo: FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { name, surname } = data

  const stringToColor = (string: string): string => {
    let hash = 0
    let i
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#'
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */
    return color
  }

  const stringAvatar = (username: string) => {
    return {
      sx: {
        bgcolor: stringToColor(username),
        width: '44px',
        height: '44px',
      },
      children: `${username.split(' ')[0][0]}${username.split(' ')[1][0]}`,
    }
  }

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
          icon={<Avatar {...stringAvatar(`${name} ${surname}`)} />}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleCloseAvatar}>
          <MenuItem onClick={handleCloseAvatar}>Log out</MenuItem>
          <MenuItem onClick={handleCloseAvatar}>Settings</MenuItem>
        </Menu>
      </Box>
    </Stack>
  )
}

export default DateLogo
