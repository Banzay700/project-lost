import { FC } from 'react'
import { Typography } from '@mui/material'
import { FieldProps, Field } from 'formik'
import { CheckboxButtonInGroup } from 'UI'
import { CheckboxTagGroupItem } from 'types'

interface ReservationTagGroupProps {
  label: string
  name: string
  data: CheckboxTagGroupItem[]
}

const CheckboxTagGroup: FC<ReservationTagGroupProps> = (props) => {
  const { label, name, data } = props

  return (
    <>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      {data.map((item) => (
        <Field key={item.value} name={name} value={item.value}>
          {({ field }: FieldProps) => (
            <CheckboxButtonInGroup
              {...item}
              field={field}
              checked={field.value.includes(item.value)}
            />
          )}
        </Field>
      ))}
    </>
  )
}

export default CheckboxTagGroup
