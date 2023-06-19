import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
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
    <Stack gap="12px">
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap="12px">
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
      </Stack>
    </Stack>
  )
}

export default CheckboxTagGroup
