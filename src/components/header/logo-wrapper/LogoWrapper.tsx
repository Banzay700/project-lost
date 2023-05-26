import { FC } from 'react'
import { Stack } from '@mui/material'

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
      <Logo view="both" link="/" />
    </Stack>
  )
}

export default LogoWrapper
