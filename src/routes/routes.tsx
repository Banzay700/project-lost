import { Navigate, Route, Routes } from 'react-router-dom'
import {
  Layout,
  WaiterLayout,
  DishesPage,
  OrdersPage,
  BillsPage,
  ReservationPage,
  LoginPage,
  ProfilePage,
  AdminLayout,
  AdminStatisticsPage,
  AdminEmployeesPage,
  AdminRestaurantPage,
  LoaderPage,
} from 'pages'
import { useUserReducer } from 'hooks'
import { useRefreshQuery } from 'store/api'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {
  const { isAuthUser } = useUserReducer()
  const { isLoading } = useRefreshQuery()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isLoading && <Route path="*" element={<LoaderPage />} />}

        {isAuthUser ? (
          <>
            <Route path="/" element={<WaiterLayout />}>
              <Route index element={<Navigate to={ROUTES.DISHES} />} />
              <Route path={ROUTES.DISHES} element={<Navigate to="pizza" />} />
              <Route path={ROUTES.DISHES} element={<DishesPage />}>
                <Route path={ROUTES.DISHES_CATEGORY} element={<DishesPage />} />
              </Route>
              <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
              <Route path={ROUTES.BILLS} element={<BillsPage />} />
              <Route path={ROUTES.RESERVATION} element={<ReservationPage />} />
              <Route path={ROUTES.PROFILE} element={<ProfilePage isLogoutButton />} />
            </Route>
            <Route path={ROUTES.ADMIN_PANEL} element={<AdminLayout />}>
              <Route index element={<Navigate to={ROUTES.ADMIN_STATISTICS} />} />
              <Route path={ROUTES.ADMIN_STATISTICS} element={<AdminStatisticsPage />}>
                <Route path={ROUTES.ADMIN_STATISTICS_CATEGORY} element={<AdminStatisticsPage />} />
              </Route>
              <Route path={ROUTES.ADMIN_RESTAURANT} element={<AdminRestaurantPage />}>
                <Route path={ROUTES.ADMIN_RESTAURANT_CATEGORY} element={<AdminRestaurantPage />} />
              </Route>
              <Route path={ROUTES.ADMIN_EMPLOYEES} element={<AdminEmployeesPage />}>
                <Route path={ROUTES.ADMIN_EMPLOYEES_CATEGORY} element={<AdminEmployeesPage />} />
              </Route>
              <Route path={ROUTES.ADMIN_SETTING} element={<ProfilePage />} />
            </Route>
          </>
        ) : (
          <>
            <Route index element={<Navigate to={ROUTES.LOGIN} />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </>
        )}
        <Route index element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
