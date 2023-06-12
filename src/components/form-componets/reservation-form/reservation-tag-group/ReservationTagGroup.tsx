import { FC } from 'react'
import { Typography } from '@mui/material'
import { FieldProps, Field } from 'formik'
import { CheckboxItem } from './CheckboxItem'
import { tags } from './ReservationTagGroup.utils'

interface ReservationTagGroupProps {
  label: string
  name: string
}

const ReservationTagGroup: FC<ReservationTagGroupProps> = (props) => {
  const { label, name } = props

  return (
    <>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      {tags.map((item) => (
        <Field key={item.value} name={name} value={item.value}>
          {({ field }: FieldProps) => (
            <CheckboxItem {...item} field={field} checked={field.value.includes(item.value)} />
          )}
        </Field>
      ))}
    </>
  )
}

export default ReservationTagGroup
