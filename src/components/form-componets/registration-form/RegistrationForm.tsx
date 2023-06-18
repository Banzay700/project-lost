import { FC, useEffect, useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { InputsBasicUserInfo } from 'components'
import { RegistrationFormReturnType } from 'types'
import { SelectInput, Button, Input } from 'UI'
import { Box, Stack } from '@mui/material'
import { selectMenuItems, validationSchema } from './registrationForm.utils'
import { RegistrationPicture } from './registration-picutre'

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
    onSubmit(value)
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
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', gap: '40px' }}>
          <Stack sx={{ gap: '20px', width: '80%' }}>
            <InputsBasicUserInfo />
            <Input placeholder="Password" name="password" label="Password" />
          </Stack>
          <RegistrationPicture />
        </Stack>
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
      </Form>
    </Formik>
  )
}

export default RegistrationForm
