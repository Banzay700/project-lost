import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { IconArrowLeft } from 'assets'
import { Button, Logo } from 'UI'
import s from './LogoWrapper.module.scss'

const LogoWrapper: FC = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      <Button
        variant="outlined"
        size="default"
        icon={<IconArrowLeft className={s.arrow} color="secondary" />}
        color="secondary"
      />
      <Box className={s.line} />
      <Logo view="both" link="/" />
    </Stack>
  )
}

export default LogoWrapper
