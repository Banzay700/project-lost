import { Navigate, Route, Routes } from 'react-router-dom'
import {
  Layout,
  WaiterLayout,
  DishesPage,
  OrdersPage,
  BillsPage,
  DishesPageContent,
  LoginPage,
  ProfilePage,
} from 'pages'
import { useUserReducer } from 'hooks/useUserReducer.hook'
import { useRefreshQuery } from 'store/api'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {
  const { isAuthUser } = useUserReducer()
  const { isLoading } = useRefreshQuery()

  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isAuthUser ? (
          <>
            <Route index element={<Navigate to={`${ROUTES.DISHES}/pizza`} />} />
            <Route path="/" element={<WaiterLayout />}>
              <Route index element={<Navigate to={`${ROUTES.DISHES}/pizza`} />} />
              <Route path={ROUTES.DISHES} element={<DishesPage />}>
                <Route index element={<Navigate to="pizza" />} />
                <Route path={ROUTES.DISHES_CATEGORY} element={<DishesPageContent />} />
              </Route>
              <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
              <Route path={ROUTES.BILLS} element={<BillsPage />} />
              <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            </Route>
          </>
        ) : (
          <>
            <Route index element={<Navigate to={ROUTES.LOGIN} />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </>
        )}
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
