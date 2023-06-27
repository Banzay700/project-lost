import { Navigate, Route } from 'react-router-dom'
import {
  BillsPage,
  DishesPage,
  OrdersPage,
  ReservationPage,
  WaiterLayout,
} from 'pages/waiters-pages'
import { ROUTES, ROUTES_WAITER } from 'routes/routes.utils'
import { ProfilePage } from 'pages/profile-page'

export const RoutesWaiter = (
  <Route path="/" element={<WaiterLayout />}>
    <Route path={ROUTES_WAITER.DISHES} element={<Navigate to="pizza" />} />
    <Route path={ROUTES_WAITER.DISHES} element={<DishesPage />}>
      <Route path={ROUTES_WAITER.DISHES_CATEGORY} element={<DishesPage />} />
    </Route>
    <Route path={ROUTES_WAITER.ORDERS} element={<OrdersPage />} />
    <Route path={ROUTES_WAITER.BILLS} element={<BillsPage />} />
    <Route path={ROUTES_WAITER.RESERVATION} element={<ReservationPage />} />
    <Route path={ROUTES.PROFILE} element={<ProfilePage isLogoutButton />} />
  </Route>
)
