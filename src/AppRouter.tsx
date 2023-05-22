import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'utils'
import { MainPage, HomePage, DishesPage } from 'pages'
import { useGetCategoriesQuery } from 'store/api/dish.api'

const AppRouter = () => {
  const { data } = useGetCategoriesQuery(null)

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />}>
        <Route index element={<Navigate to={data[0].title.toLowerCase()} />} />
        <Route path={ROUTES.HOME} element={<HomePage categories={data} />}>
          <Route path="*" element={<DishesPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
export default AppRouter
