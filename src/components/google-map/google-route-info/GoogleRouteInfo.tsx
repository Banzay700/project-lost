import { FC } from 'react'
import { Typography } from '@mui/material'
import { GoogleRouteInfoPaper } from './GoogleRouteInfo.styled'

interface GoogleRouteInfoProps {
  duration: string
  distance: string
}

const GoogleRouteInfo: FC<GoogleRouteInfoProps> = ({ duration, distance }) => {
  return (
    <GoogleRouteInfoPaper elevation={3}>
      <Typography>Duration: {duration}</Typography>
      <Typography>Distance: {distance}</Typography>
    </GoogleRouteInfoPaper>
  )
}

export default GoogleRouteInfo
