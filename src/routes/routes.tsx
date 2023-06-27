import { Navigate, Route, Routes } from 'react-router-dom'
import { LoaderPage, NotFoundPage } from 'pages'
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
import { RoutesWaiter } from './RoutesWaiter'
import { RoutesAdmin } from './RoutesAdmin'
import { RoutesDelivery } from './RoutesDelivery'
import { RoutesNotAuth } from './RoutesNotAuth'

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
      {isAuthUser && !isLoading ? (
        <>
          {role === 'Admin' && (
            <>
              <Route path="/" element={<Navigate to={ROUTES_ADMIN.DASHBOARD} />} />
              {RoutesAdmin}
            </>
          )}
          {(role === 'Admin' || role === 'Waiter') && (
            <>
              {role !== 'Admin' && (
                <Route path="/" element={<Navigate to={ROUTES_WAITER.DISHES} />} />
              )}
              {RoutesWaiter}
            </>
          )}
          {(role === 'Admin' || role === 'Courier') && (
            <>
              {role !== 'Admin' && (
                <Route path="/" element={<Navigate to={ROUTES_DELIVERY.DELIVERY} />} />
              )}
              {RoutesDelivery}
            </>
          )}
        </>
      ) : (
        <>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES_NOT_AUTH.LOGIN} />} />
          {RoutesNotAuth}
        </>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
