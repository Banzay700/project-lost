import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material'

import { InputSelectItemType } from 'types'
import { FadeIn } from 'utils'
import { MenuItemWrapper, SelectWrapper } from './SelectInput.styled'

interface SelectInputProps {
  name: string
  label: string
  data: InputSelectItemType[] | undefined
  handleValue?: (value: string) => void
  active?: boolean
}

const SelectInput: FC<SelectInputProps> = ({ name, label, data, handleValue, active }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<{ table: string; orderType: string }>()

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFieldValue(name, event.target.value as string)
    if (handleValue) {
      handleValue(event.target.value as string)
    }
  }

  return (
    <FadeIn delay={50}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: active ? '#ff5c00' : '#c2c2c2' }}>{label}</InputLabel>
        <SelectWrapper {...field} label={label} active={active} onChange={handleChange}>
          {data?.map(({ title, value }) => (
            <MenuItemWrapper key={title} value={value}>
              {title}
            </MenuItemWrapper>
          ))}
        </SelectWrapper>
      </FormControl>
    </FadeIn>
  )
}

export default SelectInput
