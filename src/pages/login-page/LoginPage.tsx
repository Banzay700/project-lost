import { FC } from 'react'
import { Login } from 'components'
import { useLoginMutation } from 'store/api'
import { UserLoginRequestType } from 'types/UserType'
import { Navigate } from 'react-router-dom'

const LoginPage: FC = () => {
  const [login, { isSuccess }] = useLoginMutation()

  const handleSubmitLogin = (value: UserLoginRequestType) => {
    login(value)
  }

  if (isSuccess) {
    return <Navigate to="/" />
  }

  return <Login onSubmit={handleSubmitLogin} />
}

export default LoginPage
