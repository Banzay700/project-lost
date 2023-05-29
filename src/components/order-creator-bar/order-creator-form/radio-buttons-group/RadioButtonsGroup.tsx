import { FC, ChangeEvent } from 'react'
import { FormControl, Stack, RadioGroup } from '@mui/material'
import { useField, useFormikContext } from 'formik'

import { RadioButton } from 'UI'
import { RadioGroupItemType } from 'types'

interface RadioButtonsGroupProps {
  name: string
  content: RadioGroupItemType[]
  handleHideSelect: (value: string) => void
}

const RadioButtonsGroup: FC<RadioButtonsGroupProps> = ({ name, content, handleHideSelect }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value)
    handleHideSelect(event.target.value)
  }

  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup onChange={handleChange}>
        <Stack spacing={2}>
          {content.map(({ label, value, icon }) => (
            <RadioButton
              key={value}
              value={value}
              label={label}
              selectedValue={field.value}
              icon={icon}
            />
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup
