import { FC, useEffect, useState } from 'react'
import { Stack, Avatar, Box } from '@mui/material'
import s from './DateLogo.module.scss'

// interface DateLogoProps {
// }

const DateLogo: FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
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
  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: '44px',
        height: '44px',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

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
      <Avatar {...stringAvatar('John Robertson')} />
    </Stack>
  )
}

export default DateLogo
