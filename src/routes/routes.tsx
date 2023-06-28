import { Navigate, Route, Routes } from 'react-router-dom'
import {
  ActiveOrderDeliveryMobilePage,
  AdminEmployeesPage,
  AdminLayout,
  AdminRestaurantPage,
  AdminStatisticsPage,
  BillsPage,
  CurrentOrderDeliveryMobilePage,
  DeliveryLayout,
  DishesPage,
  HistoryDeliveryPage,
  HomeDeliveryPage,
  LoaderPage,
  LoginPage,
  NotFoundPage,
  OrdersDeliveryPage,
  OrdersPage,
  ProfilePage,
  ReservationPage,
  WaiterLayout,
  Direction,
} from 'pages'
import { useRootLocationPath, useUserReducer } from 'hooks'
import { useRefreshQuery } from 'store/api'
import {
  ROUTES,
  ROUTES_ADMIN,
  ROUTES_DELIVERY,
  ROUTES_NOT_AUTH,
  ROUTES_WAITER,
} from './routes.utils'
import ErrorContent from '../UI/error-content/ErrorContent'

type YourErrorType = {
  status: number
  data: string
}

const AppRoutes = () => {
  const { isAuthUser, userState } = useUserReducer()
  const { role } = userState

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
      {isAuthUser && !isLoading && (
        <>
          {role === 'Admin' && (
            <>
              <Route path="/" element={<Navigate to={ROUTES_ADMIN.DASHBOARD} />} />
              <Route path={ROUTES_ADMIN.DASHBOARD} element={<AdminLayout />}>
                <Route index element={<Navigate to={ROUTES_ADMIN.STATISTICS} />} />
                <Route path={ROUTES_ADMIN.STATISTICS} element={<AdminStatisticsPage />}>
                  <Route
                    path={ROUTES_ADMIN.STATISTICS_CATEGORY}
                    element={<AdminStatisticsPage />}
                  />
                </Route>
                <Route path={ROUTES_ADMIN.RESTAURANT} element={<AdminRestaurantPage />}>
                  <Route
                    path={ROUTES_ADMIN.RESTAURANT_CATEGORY}
                    element={<AdminRestaurantPage />}
                  />
                </Route>
                <Route path={ROUTES_ADMIN.EMPLOYEES} element={<AdminEmployeesPage />}>
                  <Route path={ROUTES_ADMIN.EMPLOYEES_CATEGORY} element={<AdminEmployeesPage />} />
                </Route>
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
              </Route>
            </>
          )}
          {(role === 'Admin' || role === 'Waiter') && (
            <>
              {role !== 'Admin' && (
                <Route path="/" element={<Navigate to={ROUTES_WAITER.DISHES} />} />
              )}
              <Route path="/" element={<WaiterLayout />}>
                <Route path={ROUTES_WAITER.DISHES} element={<Navigate to="pizza" />} />
                <Route path={ROUTES_WAITER.DISHES} element={<DishesPage />}>
                  <Route path={ROUTES_WAITER.DISHES_CATEGORY} element={<DishesPage />} />
                </Route>
                <Route path={ROUTES_WAITER.ORDERS} element={<OrdersPage />} />
                <Route path={ROUTES_WAITER.BILLS} element={<BillsPage />} />
                <Route path={ROUTES_WAITER.RESERVATION} element={<ReservationPage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
              </Route>
            </>
          )}
          {(role === 'Admin' || role === 'Courier') && (
            <>
              {role !== 'Admin' && (
                <Route path="/" element={<Navigate to={ROUTES_DELIVERY.DELIVERY} />} />
              )}
              <Route path={ROUTES.HOME} element={<DeliveryLayout />}>
                <Route path={ROUTES_DELIVERY.DELIVERY} element={<HomeDeliveryPage />} />
                <Route path={ROUTES_DELIVERY.ORDERS} element={<OrdersDeliveryPage />} />
                <Route path={ROUTES_DELIVERY.HISTORY} element={<HistoryDeliveryPage />} />
                <Route path={ROUTES_DELIVERY.DIRECTION} element={<Direction />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
              </Route>
              <Route
                path={ROUTES_DELIVERY.CURRENT_ORDER}
                element={<CurrentOrderDeliveryMobilePage />}
              />
              <Route
                path={ROUTES_DELIVERY.ACTIVE_ORDER}
                element={<ActiveOrderDeliveryMobilePage />}
              />
              <Route
                path={ROUTES_DELIVERY.HISTORY_ORDER}
                element={<ActiveOrderDeliveryMobilePage />}
              />
            </>
          )}
        </>
      )}
      {!isAuthUser && !isLoading && (
        <>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES_NOT_AUTH.LOGIN} />} />
          <Route path={ROUTES_NOT_AUTH.LOGIN} element={<LoginPage />} />
        </>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
