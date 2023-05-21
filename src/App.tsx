import { DishCard, DishesList } from 'components'
import { useGetCategoriesQuery, useGetSubCategoriesInCategoryQuery } from 'store/api/dish.api'
import { DishProductType } from 'types/DishProductType'

const mok: DishProductType[] = [
  {
    id: 'test',
    price: 200,
    title: 'test',
    description: 'test',
    weightProduct: 600,
    image: 'test',
  },
  {
    id: 'test2',
    price: 200,
    title: 'test2',
    description: 'test2',
    weightProduct: 600,
    image: 'test2',
  },
  {
    id: 'test3',
    price: 200,
    title: 'test3',
    description: 'test3',
    weightProduct: 600,
    image: 'test3',
  },
  {
    id: 'test4',
    price: 200,
    title: 'test4',
    description: 'test4',
    weightProduct: 600,
    image: 'test4',
  },
  {
    id: 'test5',
    price: 200,
    title: 'test5',
    description: 'test5',
    weightProduct: 600,
    image: 'test5',
  },
  {
    id: 'test6',
    price: 200,
    title: 'test6',
    description: 'test6',
    weightProduct: 600,
    image: 'test6',
  },
  {
    id: 'test7',
    price: 200,
    title: 'test7',
    description: 'test7',
    weightProduct: 600,
    image: 'test7',
  },
  {
    id: 'test8',
    price: 200,
    title: 'test8',
    description: 'test8',
    weightProduct: 600,
    image: 'test8',
  },
  {
    id: 'test9',
    price: 200,
    title: 'test9',
    description: 'test9',
    weightProduct: 600,
    image: 'test9',
  },
]

const App = () => {
  const { data } = useGetCategoriesQuery(null)
  const { data: sub } = useGetSubCategoriesInCategoryQuery('Drinks')
  console.log(sub)
  return <DishesList dishes={mok} />
}
export default App
