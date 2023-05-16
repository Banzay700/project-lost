import { FC } from 'react'
import { Button, Link, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Coca, CocaText } from 'assets'
import s from './Logo.module.scss'
// interface LogoProps {
// }

const Logo: FC = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={4.8}>
      <Button variant="outlined" className={s.buttonBack}>
        <ArrowBack className={s.arrow} color="secondary" />
      </Button>
      <div className={s.line} />
      {/* here will be a Link routing */}
      <Link href="/" className={s.logo}>
        <Coca className={s.coca} />
        <CocaText className={s.cocaText} />
      </Link>
    </Stack>
  )
}

export default Logo
