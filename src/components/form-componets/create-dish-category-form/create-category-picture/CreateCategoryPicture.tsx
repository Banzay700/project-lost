import { FC } from 'react'
import { useFormikContext } from 'formik'
import { Stack } from '@mui/material'

import { InputImage } from 'components'
import { Button } from 'UI'
import { InputImageWrapper } from './CreateCategoryPicture.styled'

const CreateCategoryPicture: FC = () => {
  const { setFieldValue } = useFormikContext()

  const handleResetPicture = () => {
    setFieldValue('picture', '')
  }

  return (
    <Stack sx={{ gap: '20px' }}>
      <InputImageWrapper>
        <InputImage view="squareRounding" />
      </InputImageWrapper>
      <Button variant="outlined" size="small" fullWidth onClick={handleResetPicture}>
        Cancel
      </Button>
    </Stack>
  )
}

export default CreateCategoryPicture
