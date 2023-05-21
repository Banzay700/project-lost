import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik, useFormikContext } from 'formik'

import { RadioButtonsGroup } from 'components'
import { Button, SelectInput, TableInfoBox } from 'UI'
import { mockData } from 'utils'
import { initialValues, validationSchema } from './NewOrderForm.utils'
import { radioButtonGroupContent } from '../radio-buttons-group/RadioButtonGroup.utils'

import s from './NewOrderForm.module.scss'

interface NewOrderFormProps {
  handleSubmit: (values: { orderType: string; table: string }) => void
}

const NewOrderForm: FC<NewOrderFormProps> = ({ handleSubmit }) => {
  const [selectValue, setSelectValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [hidden, setHidden] = useState(false)

  const handleValue = (value: string) => {
    setSelectValue(value)
    setDisabled(false)
  }

  const handleHideSelect = (value: string) => {
    setHidden(value === 'Dine In')
    setDisabled(value === 'Dine In')
  }

  // getFreeTables data here and pass it to SelectInput `data` prop
  // handleFormSubmit must be in parent component
  //  const handleFormSubmit = (values: { orderType: string; table: string }) => {
  //     console.log(values)
  //   }

  return (
    <div className={s.newOrderForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <Stack spacing={6}>
            <RadioButtonsGroup
              name="orderType"
              content={radioButtonGroupContent}
              handleHideSelect={handleHideSelect}
            />
            <SelectInput
              name="table"
              label="Select table"
              hidden={hidden}
              data={mockData}
              handleValue={handleValue}
            />
          </Stack>
          <Stack sx={{ height: '100%' }}>
            <TableInfoBox tableNumber={selectValue} />
            <Button variant="contained" size="default" type="submit" disabled={disabled} fullWidth>
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  )
}

export default NewOrderForm
