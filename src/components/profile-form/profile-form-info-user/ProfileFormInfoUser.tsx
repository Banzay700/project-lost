import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { InputsBasicUserInfo } from 'components'
import { Input, Button } from 'UI'
import { UserType, UserUpdateInfo } from 'types'

interface ProfileInputGroupProps {
  initialValues: UserType
  onSubmit: (value: UserUpdateInfo) => void
}

const ProfileFormInfoUser: FC<ProfileInputGroupProps> = ({ initialValues, onSubmit }) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleIsDisabledInput = () => {
    setIsDisabled((prevState) => !prevState)
  }

  const handleSubmit = (value: UserUpdateInfo) => {
    onSubmit(value)
    setIsDisabled(true)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <InputsBasicUserInfo isDisabled={isDisabled} />
        <Input
          placeholder="About me"
          name="description"
          label="About me"
          multiline
          maxRows={6}
          minRows={6}
          disabled={isDisabled}
        />
        {isDisabled ? (
          <Button
            variant="outlined"
            size="default"
            fullWidth
            onClick={handleIsDisabledInput}
            type="button">
            Change profile
          </Button>
        ) : (
          <Stack direction="row" sx={{ gap: '20px' }}>
            <Button
              variant="outlined"
              size="default"
              type="button"
              fullWidth
              onClick={handleIsDisabledInput}>
              Cancel
            </Button>
            <Button variant="contained" size="default" type="submit" fullWidth>
              Save change
            </Button>
          </Stack>
        )}
      </Form>
    </Formik>
  )
}

export default ProfileFormInfoUser
