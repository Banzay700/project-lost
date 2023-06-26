import { Route } from 'react-router-dom'
import { ROUTES_NOT_AUTH } from 'routes/routes.utils'
import { LoginPage } from 'pages/login-page'

export const RoutesNotAuth = <Route path={ROUTES_NOT_AUTH.LOGIN} element={<LoginPage />} />
