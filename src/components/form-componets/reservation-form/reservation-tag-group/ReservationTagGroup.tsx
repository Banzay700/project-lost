import { FC, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { useField, Field } from 'formik'
import { CheckboxItem } from './CheckboxItem'
import { tags, FuncArgs } from './ReservationTagGroup.utils'

interface ReservationTagGroupProps {
  label: string
  name: string
}

const ReservationTagGroup: FC<ReservationTagGroupProps> = (props) => {
  const { label, name } = props

  const [, , helpers] = useField(name)

  const [selectedTags, setTags] = useState<string[]>([])

  const handleChange = ({ value, isChecked }: FuncArgs) => {
    if (!isChecked) {
      setTags((prevState) => prevState.filter((item) => item !== value))
    } else {
      setTags((prevState) => [...prevState, value])
    }
  }

  useEffect(() => {
    helpers.setValue(selectedTags, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags])

  return (
    <Field name={name}>
      {() => (
        <>
          <Typography variant="h3" component="p">
            {label}
          </Typography>
          {tags.map((item) => (
            <CheckboxItem key={item.value} {...item} onChange={handleChange} />
          ))}
        </>
      )}
    </Field>
  )
}

export default ReservationTagGroup
