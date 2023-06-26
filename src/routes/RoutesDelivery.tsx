import { Route } from 'react-router-dom'

import {
  ActiveOrderDeliveryMobilePage,
  CurrentOrderDeliveryMobilePage,
  DeliveryLayout,
  HomeDeliveryPage,
  OrdersDeliveryPage,
} from 'pages/delivery-pages'
import { ProfilePage } from 'pages/profile-page'
import { ROUTES_DELIVERY, ROUTES } from './routes.utils'

export const RoutesDelivery = (
  <>
    <Route path={ROUTES.HOME} element={<DeliveryLayout />}>
      <Route path={ROUTES_DELIVERY.DELIVERY} element={<HomeDeliveryPage />} />
      <Route path={ROUTES_DELIVERY.ORDERS} element={<OrdersDeliveryPage />} />

      <Route path={ROUTES.PROFILE} element={<ProfilePage isLogoutButton />} />
    </Route>
    <Route path={ROUTES_DELIVERY.CURRENT_ORDER} element={<CurrentOrderDeliveryMobilePage />} />
    <Route path={ROUTES_DELIVERY.ACTIVE_ORDER} element={<ActiveOrderDeliveryMobilePage />} />
  </>
)
