import { FC } from 'react'
import { InputImage } from 'components'
import { Box, Stack } from '@mui/material'
import { Button } from 'UI'
import { useFormikContext } from 'formik'

const CreateCategoryPicture: FC = () => {
  const { setFieldValue } = useFormikContext()

  const handleResetPicture = () => {
    setFieldValue('picture', '')
  }

  return (
    <Stack sx={{ gap: '20px' }}>
      <Box sx={{ width: '200px', height: '200px', minHeight: '200px', minWidth: '200px' }}>
        <InputImage view="squareRounding" />
      </Box>
      <Button variant="outlined" size="small" fullWidth onClick={handleResetPicture}>
        Cancel
      </Button>
    </Stack>
  )
}

export default CreateCategoryPicture
