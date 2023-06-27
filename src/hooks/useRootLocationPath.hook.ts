import { useLocation } from 'react-router-dom'
import { ROUTES_WAITER, ROUTES, ROUTES_NOT_AUTH, ROUTES_DELIVERY, ROUTES_ADMIN } from 'routes'

type RootLocationPathType = {
  location: string
  pathname: string
  isRootLocation: boolean
  isHomeLocation: boolean
  isOrdersLocation: boolean
  isBillsLocation: boolean
  isReservationLocation: boolean
  isProfileLocation: boolean
  isLoginLocation: boolean
  isDeliveryHomeLocation: boolean
  isAdminLocation: boolean
}

export const useRootLocationPath = (): RootLocationPathType => {
  const { pathname } = useLocation()
  const location = pathname.split('/')[1]
  const isRootLocation = !location
  const isHomeLocation = location === ROUTES_WAITER.DISHES
  const isOrdersLocation = location === ROUTES_WAITER.ORDERS
  const isBillsLocation = location === ROUTES_WAITER.BILLS
  const isReservationLocation = location === ROUTES_WAITER.RESERVATION
  const isProfileLocation = location === ROUTES.PROFILE
  const isLoginLocation = location === ROUTES_NOT_AUTH.LOGIN
  const isDeliveryHomeLocation = location === ROUTES_DELIVERY.DELIVERY
  const isAdminLocation = location === ROUTES_ADMIN.DASHBOARD

  return {
    location,
    pathname,
    isRootLocation,
    isHomeLocation,
    isOrdersLocation,
    isBillsLocation,
    isReservationLocation,
    isProfileLocation,
    isLoginLocation,
    isDeliveryHomeLocation,
    isAdminLocation,
  }
}
