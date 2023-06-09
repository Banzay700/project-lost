import { FC } from 'react'
import { InputImage } from 'components'
import { Box } from '@mui/material'
import { Button } from 'UI'
import { useFormikContext } from 'formik'

const CreateCategoryPicture: FC = () => {
  const { setFieldValue } = useFormikContext()

  const handleResetPicture = () => {
    setFieldValue('picture', '')
  }

  return (
    <Box sx={{ width: '300px', height: '300px', minHeight: '300px', minWidth: '300px' }}>
      <InputImage view="squareRounding" />
      <br />
      <Button variant="outlined" size="small" fullWidth onClick={handleResetPicture}>
        Cancel
      </Button>
    </Box>
  )
}

export default CreateCategoryPicture
