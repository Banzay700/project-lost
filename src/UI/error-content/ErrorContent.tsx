import { FC } from 'react'
import { FadeIn } from 'utils'
import { Stack, Typography } from '@mui/material'
import { Button } from 'UI'
import { useNavigate } from 'react-router-dom'
import { ErrorContentWrapper, ErrorTitle } from './ErrorContent.styled'

interface ErrorContentProps {
  status: number
  title?: string
  errorMessage: string
}

const ErrorContent: FC<ErrorContentProps> = ({ status, title, errorMessage }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <ErrorContentWrapper>
      <FadeIn>
        <ErrorTitle color="primary">{status}</ErrorTitle>
        {title && (
          <Typography
            variant="dashNumb"
            component="p"
            textTransform="uppercase"
            color="text.addition">
            {title}
          </Typography>
        )}
        <Typography align="center">{errorMessage}</Typography>
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
    </ErrorContentWrapper>
  )
}

export default ErrorContent
