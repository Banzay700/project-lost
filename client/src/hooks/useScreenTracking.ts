import { useMediaQuery, useTheme } from '@mui/material'

export const useScreenTracking = () => {
  const { breakpoints } = useTheme()
  const isMobileScreen = useMediaQuery(breakpoints.down('sm'))

  return { isMobileScreen }
}
