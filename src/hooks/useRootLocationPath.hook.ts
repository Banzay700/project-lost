import { useLocation } from 'react-router-dom'
import { ROUTES } from 'routes'

type RootLocationPathType = {
  location: string
  pathname: string
  isHomeLocation: boolean
  isOrdersLocation: boolean
  isBillsLocation: boolean
  isReservationLocation: boolean
  isProfileLocation: boolean
}

export const useRootLocationPath = (): RootLocationPathType => {
  const { pathname } = useLocation()
  const location = pathname.split('/')[1]
  const isHomeLocation = location === ROUTES.DISHES
  const isOrdersLocation = location === ROUTES.ORDERS
  const isBillsLocation = location === ROUTES.BILLS
  const isReservationLocation = location === ROUTES.RESERVATION
  const isProfileLocation = location === ROUTES.PROFILE

  return {
    location,
    pathname,
    isHomeLocation,
    isOrdersLocation,
    isBillsLocation,
    isReservationLocation,
    isProfileLocation,
  }
}
