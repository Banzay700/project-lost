import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Formik, FormikHelpers } from 'formik'

import { InputsBasicUserInfo } from 'components'
import { RegistrationFormReturnType } from 'types'
import { SelectInput, Button, Input } from 'UI'
import { formatPhoneNumber } from 'utils'
import { selectMenuItems, validationSchema } from './registrationForm.utils'
import { RegistrationPicture } from './registration-picutre'
import { FormWrapper, InputsWrapper } from './RegistrationForm.styled'

interface RegistrationFormProps {
  initialValues: RegistrationFormReturnType
  onSubmit: (values: RegistrationFormReturnType) => void
}

const RegistrationForm: FC<RegistrationFormProps> = ({ initialValues, onSubmit }) => {
  const [formValues, setFormValues] = useState(initialValues)
  const handleSubmit = (
    value: RegistrationFormReturnType,
    { resetForm }: FormikHelpers<RegistrationFormReturnType>,
  ) => {
    const formattedValues = formatPhoneNumber(value)
    onSubmit(formattedValues)
    resetForm()
  }

  useEffect(() => {
    setFormValues(initialValues)
  }, [initialValues])

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize>
      <FormWrapper>
        <InputsWrapper>
          <Stack sx={{ gap: '20px', width: '80%' }}>
            <InputsBasicUserInfo />
          </Stack>
          <RegistrationPicture />
        </InputsWrapper>
        <Box width="20%">
          <SelectInput name="role" label="Role" data={selectMenuItems} />
        </Box>
        <Input
          placeholder="Notes send email"
          name="description"
          label="Notes"
          multiline
          maxRows={6}
          minRows={6}
        />
        <Box sx={{ width: '400px' }}>
          <Button variant="contained" size="medium" fullWidth>
            Registration
          </Button>
        </Box>
      </FormWrapper>
    </Formik>
  )
}

export default RegistrationForm
