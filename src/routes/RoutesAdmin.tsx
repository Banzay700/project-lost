import { Navigate, Route } from 'react-router-dom'
import { ROUTES_ADMIN } from 'routes/routes.utils'
import {
  AdminEmployeesPage,
  AdminLayout,
  AdminRestaurantPage,
  AdminStatisticsPage,
} from 'pages/admin-pages'
import { ProfilePage } from 'pages/profile-page'

export const RoutesAdmin = (
  <Route path={ROUTES_ADMIN.DASHBOARD} element={<AdminLayout />}>
    <Route index element={<Navigate to={ROUTES_ADMIN.STATISTICS} />} />
    <Route path={ROUTES_ADMIN.STATISTICS} element={<AdminStatisticsPage />}>
      <Route path={ROUTES_ADMIN.STATISTICS_CATEGORY} element={<AdminStatisticsPage />} />
    </Route>
    <Route path={ROUTES_ADMIN.RESTAURANT} element={<AdminRestaurantPage />}>
      <Route path={ROUTES_ADMIN.RESTAURANT_CATEGORY} element={<AdminRestaurantPage />} />
    </Route>
    <Route path={ROUTES_ADMIN.EMPLOYEES} element={<AdminEmployeesPage />}>
      <Route path={ROUTES_ADMIN.EMPLOYEES_CATEGORY} element={<AdminEmployeesPage />} />
    </Route>
    <Route path={ROUTES_ADMIN.SETTING} element={<ProfilePage />} />
  </Route>
)
