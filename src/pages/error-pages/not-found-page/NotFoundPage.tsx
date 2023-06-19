import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Button } from 'UI'
import { useNavigate } from 'react-router-dom'
import { FadeIn } from 'utils/index'
import { NotFoundPageErrorTitle, NotFoundPageWrapper } from './NotFoundPage.styled'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <NotFoundPageWrapper>
      <FadeIn>
        <NotFoundPageErrorTitle color="primary">404</NotFoundPageErrorTitle>
        <Typography
          variant="dashNumb"
          component="p"
          textTransform="uppercase"
          color="text.addition">
          ooops! page not found
        </Typography>
        <Typography>Sorry the page you are looking for does not exist</Typography>
        <Stack sx={{ mt: '20px', width: '100%', alignItems: 'center' }}>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            maxWidth="200px"
            onClick={handleNavigate}>
            GO TO HOME
          </Button>
        </Stack>
      </FadeIn>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
