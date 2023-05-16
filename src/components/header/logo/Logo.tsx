import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Coca, CocaText } from 'assets'
import { Link } from 'react-router-dom'
import { Button } from 'UI/button'
import s from './Logo.module.scss'
// interface LogoProps {
// }

const Logo: FC = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      <Button
        variant="outlined"
        size="default"
        icon={<ArrowBack className={s.arrow} color="secondary" />}
        color="secondary"
      />
      <Box className={s.line} />
      <Link to="/" className={s.logo}>
        <Coca className={s.coca} />
        <CocaText className={s.cocaText} />
      </Link>
    </Stack>
  )
}

export default Logo
