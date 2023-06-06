import { FC } from 'react'
import { Stack } from '@mui/material'
import { Logo } from 'UI/logo'
import { ROUTES } from 'routes/routes.utils'
import { Button } from 'UI/button'
import { IconArrowLeft } from 'assets/icons'
import { useNavigate } from 'react-router-dom'

const HeaderAdmin: FC = () => {
  const navigate = useNavigate()

  const handleNavigateFood = () => {
    navigate(`/${ROUTES.DISHES}`)
  }

  return (
    <Stack
      direction="row"
      sx={{
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '0 24px',
        borderBottom: '1px solid #e4e4e4',
      }}>
      <Logo link={`/${ROUTES.ADMIN_PANEL}`} view="both" />
      <Button
        variant="contained"
        size="small"
        endIcon={<IconArrowLeft style={{ transform: 'scale(-1, 1)' }} />}
        onClick={handleNavigateFood}>
        Food
      </Button>
    </Stack>
  )
}

export default HeaderAdmin
