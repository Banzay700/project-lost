import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Button, Logo } from 'UI'
import s from './LogoWrapper.module.scss'

const LogoWrapper: FC = () => {
  // const theme = useTheme()
  // const breakpoints = theme.breakpoints.down('sm') ? 'img' : 'both'

  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      <Button
        variant="outlined"
        size="default"
        icon={<ArrowBack className={s.arrow} color="secondary" />}
        color="secondary"
      />
      <Box className={s.line} />
      <Logo classImg="coca" classText="cocaText" view="both" link="/" />
    </Stack>
  )
}

export default LogoWrapper
