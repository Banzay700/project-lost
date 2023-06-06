import { FC, useState } from 'react'
import { CheckboxItem } from './CheckboxItem'
import { tags } from './utils'
import s from './ReservationTagGroup.module.scss'

const ReservationTagGroup = () => {
  const [selectedValue, setValue] = useState<string[]>([])

  const handleChange = (value: string, isChecked: boolean) => {
    if (!isChecked) {
      setValue((prevState) => prevState.filter((item) => item !== value))
    } else {
      setValue((prevState) => [...prevState, value])
    }
    console.log(selectedValue)
  }

  return (
    <>
      {tags.map((item) => (
        <CheckboxItem key={item} text={item} onChange={handleChange} />
      ))}
    </>
  )
}

export default ReservationTagGroup
