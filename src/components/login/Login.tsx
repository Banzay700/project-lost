import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { useGetAllUsersQuery } from 'store/api/users.api'
import { EmployeesCarrousel } from 'components/employees-carrousel'
import { Button } from 'UI/button'
import { InputPassword } from './input-password'

import s from './Login.module.scss'

const Login: FC = () => {
  const { data: users = [] } = useGetAllUsersQuery('')
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
          <InputPassword id={chosenEmployee} />
        ) : (
          <Button variant="outlined" size="default" className={s.buttonBlur}>
            Login
          </Button>
        )}
      </Stack>
    </Stack>
  )
}

export default Login
