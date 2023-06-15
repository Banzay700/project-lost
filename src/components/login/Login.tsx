import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { useGetUsersInLoginQuery } from 'store/api/users.api'
import { EmployeesCarrousel } from 'components/employees-carrousel'
import { Button } from 'UI/button'
import { UserLoginRequestType } from 'types/UserType'
import { LoginForm } from './login-form'

import s from './Login.module.scss'

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
    <Stack alignItems="center" justifyContent="center" className={s.wrapper}>
      <Stack flexDirection="column" alignItems="center" gap={gap}>
        <EmployeesCarrousel
          bgc="transparent"
          employeesData={users}
          handleSetActiveSlide={handleSetActiveSlide}
          chosenEmployee={chosenEmployee}
        />
        {chosenEmployee ? (
          <LoginForm userId={chosenEmployee} onSubmit={onSubmit} />
        ) : (
          <Button variant="outlined" size="medium" className={s.buttonBlur}>
            Login
          </Button>
        )}
      </Stack>
    </Stack>
  )
}

export default Login
