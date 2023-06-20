import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { useGetUsersInLoginQuery } from 'store/api'
import { EmployeesCarrousel, LoginForm, NotifyError } from 'components'
import { Button } from 'UI'
import { UserLoginRequestType } from 'types'
import { FadeIn } from 'utils'
import { LoginWrapper } from './Login.styled'

interface LoginProps {
  onSubmit: (value: UserLoginRequestType) => void
  isError: boolean
  error?: unknown
}

const Login: FC<LoginProps> = (props) => {
  const { onSubmit, isError, error } = props

  const { data: users = [] } = useGetUsersInLoginQuery()
  const [chosenEmployee, setChosenEmployee] = useState('')

  const handleSetActiveSlide = (id: string) => {
    setChosenEmployee(id)
  }

  const gap = chosenEmployee ? '44px' : '114px'

  return (
    <LoginWrapper>
      <Stack flexDirection="column" alignItems="center" gap={gap}>
        <EmployeesCarrousel
          employeesData={users}
          handleSetActiveSlide={handleSetActiveSlide}
          chosenEmployee={chosenEmployee}
        />
        {isError && <NotifyError isError={isError} error={error} />}
        {chosenEmployee ? (
          <FadeIn delay={100}>
            <LoginForm userId={chosenEmployee} onSubmit={onSubmit} />
          </FadeIn>
        ) : (
          <Button variant="outlined" size="medium" fullWidth maxWidth="400px" blur>
            Login
          </Button>
        )}
      </Stack>
    </LoginWrapper>
  )
}

export default Login
