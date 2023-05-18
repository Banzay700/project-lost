import { Formik, Form, FormikValues } from 'formik'
import { Stack } from '@mui/material'
import { object, string } from 'yup'

import { Input, SelectInput } from 'UI'

const INITIAL_VALUES = {
  firstName: '',
  table: '',
}
const VALIDATION_SCHEMA = object().shape({
  firstName: string().required('First name is required'),
  table: string().required(''),
})

const App = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '257px', margin: '70px' }}>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSubmit}>
          <Form>
            <Stack spacing={2}>
              <SelectInput name="table" label="Select table" />
              <Input name="firstName" label="Test label" placeholder="Name" />
              <button type="submit">Submit</button>
            </Stack>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export default App
