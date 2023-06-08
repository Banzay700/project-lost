import { FC } from 'react'
import { Form, Formik } from 'formik'
import { Button } from 'UI/button'
import { InputsCreateDish } from 'components/input-form'
import FormCreateDishCategoryItem from './form-create-dish-category-item/FormCreateDishCategoryItem'

const init = {
  globalCategory: '',
  category: '',
  title: '',
  price: '',
  weight: '',
  picture: '',
  status: 'active',
  description: '',
  type: 'Dish',
}

const FormCreateDish: FC = () => {
  const handleSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <Formik initialValues={init} onSubmit={handleSubmit}>
      <Form>
        <InputsCreateDish />
        <FormCreateDishCategoryItem />
        <Button variant="contained" size="default">
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export default FormCreateDish
