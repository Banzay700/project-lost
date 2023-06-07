import { FC } from 'react'
import { Box } from '@mui/material'
import { RegistrationFormReturnType } from 'types'
import { useRegistrationMutation } from 'store/api'
import { Snackbar } from 'UI'
import { FormRegistration } from 'components'
import { initialValues } from './adminEmployeesRegistrationPage.utils'

const AdminEmployeesRegistrationPage: FC = () => {
  const [createUser, { isSuccess, isError }] = useRegistrationMutation()

  const handleSubmitRegistrationForm = (value: RegistrationFormReturnType) => {
    const formData = new FormData()
    const { picture, ...data } = value

    Object.entries(data).forEach(([keys, values]) => {
      if (values) {
        formData.append(keys, values)
      }
    })
    if (picture) {
      formData.append('picture', picture[0])
    }
    createUser(formData)
  }
  // TODO доделать
  return (
    <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
      <FormRegistration initialValues={initialValues} onSubmit={handleSubmitRegistrationForm} />
      <Snackbar isError={isError} isSuccess={isSuccess} />
    </Box>
  )
}

export default AdminEmployeesRegistrationPage
