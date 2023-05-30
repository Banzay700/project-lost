import { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { UserPassword } from 'types'
import { Input, Button } from 'UI'
import { Stack } from '@mui/material'

interface ProfileFormChangePasswordProps {
  initialValues: UserPassword
  onSubmit: (value: UserPassword) => void
}

const ProfileFormPassword: FC<ProfileFormChangePasswordProps> = ({ initialValues, onSubmit }) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleIsDisabled = () => {
    setIsDisabled((prevState) => !prevState)
  }

  const handleSubmit = (value: UserPassword) => {
    onSubmit(value)
    setIsDisabled(true)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        {isDisabled ? (
          <Button variant="outlined" size="default" type="button" onClick={handleIsDisabled}>
            Change password
          </Button>
        ) : (
          <>
            <Stack direction="row" sx={{ gap: '10px' }}>
              <Button
                variant="outlined"
                size="small"
                type="button"
                fullWidth
                onClick={handleIsDisabled}>
                Cancel
              </Button>
              <Button variant="contained" size="small" fullWidth>
                Save change
              </Button>
            </Stack>
            <Input placeholder="Password" name="password" label="Password" />
          </>
        )}
      </Form>
    </Formik>
  )
}

export default ProfileFormPassword
