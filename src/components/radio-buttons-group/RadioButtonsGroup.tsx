import { FC, ChangeEvent } from 'react'
import { FormControl, Stack, RadioGroup } from '@mui/material'
import { useField, useFormikContext } from 'formik'

import { RadioButton } from 'UI'
import { RadioGroupContentType } from 'types'

interface RadioButtonsGroupProps {
  name: string
  label: string
  content: RadioGroupContentType[]
}

const RadioButtonsGroup: FC<RadioButtonsGroupProps> = ({ name, content }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value)
  }

  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup {...field} onChange={handleChange}>
        <Stack spacing={2}>
          {content.map(({ value, icon }) => (
            <RadioButton key={value} value={value} selectedValue={field.value} icon={icon} />
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup
