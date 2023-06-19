import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { useGetUsersInLoginQuery } from 'store/api'
import { EmployeesCarrousel, LoginForm } from 'components'
import { Button } from 'UI'
import { UserLoginRequestType } from 'types'
import { FadeIn } from 'utils'
import { LoginWrapper } from './Login.styled'

interface LoginProps {
  onSubmit: (value: UserLoginRequestType) => void
}

const Login: FC<LoginProps> = ({ onSubmit }) => {
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
        {chosenEmployee ? (
          <FadeIn>
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
