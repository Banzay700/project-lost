import { FC } from 'react'
import { Input, SelectInput } from 'UI'
import { selectMenuItem } from './inputsCreateDish.utils'

const InputsCreateDish: FC = () => {
  return (
    <>
      <Input placeholder="Product Name" name="title" label="Product Name" />
      <Input placeholder="Price" name="price" label="Price" />
      <Input placeholder="Weight" name="weight" label="Weight" />
      <SelectInput name="status" label="Status" data={selectMenuItem} />
      <Input
        placeholder="Description"
        name="description"
        label="Description"
        multiline
        maxRows={4}
        minRows={4}
      />
    </>
  )
}

export default InputsCreateDish
