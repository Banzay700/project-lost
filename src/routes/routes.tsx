import { Navigate, Route, Routes } from 'react-router-dom'
import {
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
  NotFoundPage,
  DeliveryLayout,
  DeliveryHomePage,
  DeliveryCurrentOrderMobilePage,
  DeliveryOrderPage,
  DeliveryActiveOrderMobilePage,
} from 'pages'
import { useRootLocationPath, useUserReducer } from 'hooks'
import { useRefreshQuery } from 'store/api'
import { ROUTES } from './routes.utils'
import ErrorContent from '../UI/error-content/ErrorContent'

type YourErrorType = {
  status: number
  data: string
}

const AppRoutes = () => {
  const { isAuthUser } = useUserReducer()
  const { isLoading, error } = useRefreshQuery()
  const { isLoginLocation, isRootLocation } = useRootLocationPath()

  if (isLoading) {
    return <LoaderPage />
  }

  if (
    (error as YourErrorType)?.status === 401 &&
    !isAuthUser &&
    !isLoginLocation &&
    !isRootLocation
  ) {
    return (
      <ErrorContent
        title="ooops! you not authenticated"
        status={(error as YourErrorType).status}
        errorMessage={(error as YourErrorType).data}
      />
    )
  }

  return (
    <Routes>
      {isAuthUser && !isLoading ? (
        <>
          <Route path="/" element={<Navigate to={ROUTES.DISHES} />} />
          <Route path="/" element={<WaiterLayout />}>
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

          <Route path={ROUTES.DELIVERY} element={<DeliveryLayout />}>
            <Route index element={<DeliveryHomePage />} />
          </Route>
          <Route
            path={ROUTES.DELIVERY_CURRENT_ORDER}
            element={<DeliveryCurrentOrderMobilePage />}
          />

          <Route path={ROUTES.DELIVERY_ORDERS} element={<DeliveryLayout />}>
            <Route index element={<DeliveryOrderPage />} />
          </Route>
          <Route path={ROUTES.DELIVERY_ACTIVE_ORDER} element={<DeliveryActiveOrderMobilePage />} />

          <Route path={ROUTES.DELIVERY_HISTORY} element={<DeliveryLayout />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
