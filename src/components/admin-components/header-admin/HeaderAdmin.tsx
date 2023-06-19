import { FC } from 'react'
import { Box } from '@mui/material'
import { Logo, Button } from 'UI'
import { ROUTES } from 'routes'
import { Icon } from 'assets'
import { useNavigate } from 'react-router-dom'
import { HeaderAdminWrapper } from './HeaderAdmin.styled'

const HeaderAdmin: FC = () => {
  const navigate = useNavigate()

  const handleNavigateFood = () => {
    navigate(`/${ROUTES.DISHES}`)
  }

  return (
    <HeaderAdminWrapper>
      <Logo link={`/${ROUTES.ADMIN_PANEL}`} view="both" />
      <Box width="100px">
        <Button
          variant="contained"
          size="small"
          endIcon={<Icon.ArrowLeft style={{ transform: 'scale(-1, 1)' }} />}
          onClick={handleNavigateFood}
          fullWidth>
          Food
        </Button>
      </Box>
    </HeaderAdminWrapper>
  )
}

export default HeaderAdmin
