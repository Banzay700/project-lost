import { FC } from 'react'
import { useFormikContext } from 'formik'
import { Stack } from '@mui/material'

import { InputImage } from 'components'
import { Button } from 'UI'

const RegistrationPicture: FC = () => {
  const { setFieldValue } = useFormikContext()
  const handleResetForm = () => setFieldValue('picture', '')

  return (
    <Stack gap="20px">
      <InputImage view="round" />
      <Button variant="outlined" size="small" fullWidth type="button" onClick={handleResetForm}>
        Cancel
      </Button>
    </Stack>
  )
}

export default RegistrationPicture
