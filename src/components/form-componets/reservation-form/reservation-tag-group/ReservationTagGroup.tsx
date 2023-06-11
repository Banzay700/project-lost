import { FC, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { CheckboxItem } from './CheckboxItem'
import { tags, FuncArgs } from './ReservationTagGroup.utils'
import { SetFormValues } from '../ReservationForm.utils'

interface ReservationTagGroupProps {
  label: string
  handleSetFormValues: (fieldName: string, value: SetFormValues) => void
}

const ReservationTagGroup: FC<ReservationTagGroupProps> = (props) => {
  const { handleSetFormValues, label } = props

  const [selectedTags, setTags] = useState<string[]>([])

  const handleChange = ({ value, isChecked }: FuncArgs) => {
    if (!isChecked) {
      setTags((prevState) => prevState.filter((item) => item !== value))
    } else {
      setTags((prevState) => [...prevState, value])
    }
  }

  useEffect(() => {
    handleSetFormValues('tags', selectedTags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags])

  return (
    <>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      {tags.map((item) => (
        <CheckboxItem key={item.value} {...item} onChange={handleChange} />
      ))}
    </>
  )
}

export default ReservationTagGroup
