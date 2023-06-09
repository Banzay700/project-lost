import { FC } from 'react'
import { CreateDishForm } from 'components'
import { CreateDishFormReturnType } from 'types/ComponentsReturnType'
import { useCreateDishMutation } from 'store/api'

const AdminCreateDishPage: FC = () => {
  const [createDish] = useCreateDishMutation()
  const handleSubmitCreateDish = (value: CreateDishFormReturnType) => {
    const formData = new FormData()

    const { picture, ...data } = value

    Object.entries(data).forEach(([keys, values]) => {
      if (values) {
        formData.append(keys, values)
      }
    })
    if (picture) {
      formData.append('picture', picture[0])
    }

    createDish(formData)
  }
  return <CreateDishForm onSubmit={handleSubmitCreateDish} />
}

export default AdminCreateDishPage
