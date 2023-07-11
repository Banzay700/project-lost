import { FC } from 'react'
import { Box } from '@mui/material'
import { InputImage } from 'components'
import { useFormikContext } from 'formik'
import { Button } from 'UI'

const CreateDishPictureFormItem: FC = () => {
  const { setFieldValue } = useFormikContext()

  const handleResetPicture = () => {
    setFieldValue('picture', '')
  }
  return (
    <Box sx={{ width: '300px', height: '300px', minWidth: '300px', minHeight: '300px' }}>
      <InputImage view="squareRounding" />
      <br />
      <Button variant="outlined" size="small" onClick={handleResetPicture} fullWidth>
        Cancel
      </Button>
    </Box>
  )
}

export default CreateDishPictureFormItem
