import { FC } from 'react'
import { Box } from '@mui/material'
import { InputImage } from 'components/input-form'
import { Button } from 'UI/button'
import { useFormikContext } from 'formik'

const RegistrationPicture: FC = () => {
  const { setFieldValue } = useFormikContext()
  const handleResetForm = () => {
    setFieldValue('picture', '')
  }
  return (
    <Box sx={{ minWidth: '300px', minHeight: '300px', width: '300px', height: '300px' }}>
      <InputImage view="round" />
      <br />
      <Button variant="outlined" size="small" fullWidth type="button" onClick={handleResetForm}>
        Cancel
      </Button>
    </Box>
  )
}

export default RegistrationPicture
