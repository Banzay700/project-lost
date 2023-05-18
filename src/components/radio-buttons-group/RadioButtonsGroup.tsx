import { FC, ChangeEvent } from 'react'
import { FormControl, Stack, RadioGroup } from '@mui/material'
import { useField, useFormikContext } from 'formik'

import { RadioButton } from 'UI'
import { DineIn, TakeAway, Delivery } from 'assets'

interface RadioButtonsGroupProps {
  name: string
  label: string
}

const RadioButtonsGroup: FC<RadioButtonsGroupProps> = ({ name }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value)
  }

  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup {...field} onChange={handleChange}>
        <Stack spacing={2}>
          <RadioButton value="Dine In" icon={<DineIn />} selectedValue={field.value} />
          <RadioButton value="Take Away" icon={<TakeAway />} selectedValue={field.value} />
          <RadioButton value="Delivery" icon={<Delivery />} selectedValue={field.value} />
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup
