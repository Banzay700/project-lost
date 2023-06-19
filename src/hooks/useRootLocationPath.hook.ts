import { useLocation } from 'react-router-dom'
import { ROUTES } from 'routes'

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
}

export const useRootLocationPath = (): RootLocationPathType => {
  const { pathname } = useLocation()
  const location = pathname.split('/')[1]
  const isRootLocation = !location
  const isHomeLocation = location === ROUTES.DISHES
  const isOrdersLocation = location === ROUTES.ORDERS
  const isBillsLocation = location === ROUTES.BILLS
  const isReservationLocation = location === ROUTES.RESERVATION
  const isProfileLocation = location === ROUTES.PROFILE
  const isLoginLocation = location === ROUTES.LOGIN

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
  }
}
