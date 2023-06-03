import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { InputImage, InputsBasicUserInfo } from 'components'
import { Input } from 'UI/input'
import { RegistrationFormReturnType } from 'types'
import { SelectInput, Button } from 'UI'
import { Box, Stack } from '@mui/material'
import { selectMenuItems, validationSchema } from './registrationForm.utils'

interface RegistrationFormProps {
  initialValues: RegistrationFormReturnType
  onSubmit: (values: RegistrationFormReturnType) => void
}

const RegistrationForm: FC<RegistrationFormProps> = ({ initialValues, onSubmit }) => {
  const handleSubmit = (
    value: RegistrationFormReturnType,
    { resetForm }: FormikHelpers<RegistrationFormReturnType>,
  ) => {
    onSubmit(value)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize>
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', gap: '40px' }}>
          <Stack sx={{ gap: '20px', width: '80%' }}>
            <InputsBasicUserInfo />
            <Input placeholder="Password" name="password" label="Password" />
          </Stack>
          <Box sx={{ minWidth: '300px', minHeight: '300px', width: '300px', height: '300px' }}>
            <InputImage view="round" />
          </Box>
        </Stack>
        <Box width="20%">
          <SelectInput
            name="role"
            label="Role"
            data={selectMenuItems}
            handleValue={() => {}}
            hidden
          />
        </Box>
        <Input
          placeholder="Notes send email"
          name="description"
          label="Notes"
          multiline
          maxRows={6}
          minRows={6}
        />
        <Box sx={{ width: '200px' }}>
          <Button variant="contained" size="default" fullWidth>
            Registration
          </Button>
        </Box>
      </Form>
    </Formik>
  )
}

export default RegistrationForm
