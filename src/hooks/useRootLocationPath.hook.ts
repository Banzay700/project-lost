import { useLocation } from 'react-router-dom'

export const useRootLocationPath = () => {
  const { pathname } = useLocation()

  return pathname.split('/')[1]
}
