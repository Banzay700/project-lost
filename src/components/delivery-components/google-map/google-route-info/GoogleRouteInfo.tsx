import { FC } from 'react'
import { GoogleRouteInfoPaper } from './GoogleRouteInfo.styled'

interface GoogleRouteInfoProps {
  duration: string
  distance: string
}

const GoogleRouteInfo: FC<GoogleRouteInfoProps> = ({ duration, distance }) => {
  return (
    <GoogleRouteInfoPaper elevation={3}>
      <div>Duration: {duration}</div>
      <div>Distance: {distance}</div>
    </GoogleRouteInfoPaper>
  )
}

export default GoogleRouteInfo
