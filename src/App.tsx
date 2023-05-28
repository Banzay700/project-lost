import { Stack } from '@mui/material'
import { AppRoutes } from 'routes'
import { Login } from './components'

const App = () => {
  // TODO: add to dish layout
  // const { data } = useGetCategoriesQuery(null)
  //
  // if (!data) {
  //   return <div>loading...</div>
  // }

  return (
    <Stack height="100vh">
      {/* <Login /> */}
      <AppRoutes />
    </Stack>
  )
}
export default App
// <Routes>
// <Route path={ROUTES.HOME} element={<Layout />}>
// <Route index element={<Navigate to={data[0].title.toLowerCase()} />} />
// <Route path={ROUTES.HOME} element={<HomePage categories={data} />}>
//   <Route path="*" element={<DishesPage />} />
// </Route>
// </Route>
// </Routes>
