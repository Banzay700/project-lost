import { FC, useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { RouteInfoType, MapActionsType } from 'types'
import { GOOGLE_MAP } from 'utils'
import { GoogleMapBox } from './GoogleMap.styled'
import { GoogleRouteInfo } from './google-route-info'
import { directionsServices } from './GoogleMap.utils'

interface GoogleMapProps {
  lat: number
  lng: number
  zoom?: number
  hideTripSummary?: boolean
  isMarker?: boolean
  mapActions?: MapActionsType
}

const GoogleMap: FC<GoogleMapProps> = ({
  lat,
  lng,
  zoom,
  hideTripSummary,
  isMarker,
  mapActions,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [routeInfo, setRouteInfo] = useState<RouteInfoType>({
    duration: '',
    distance: '',
  })

  const initMap = async () => {
    const { MapTypeControlStyle, Marker, Map, LatLng, TravelMode } = await window.google.maps
    const position = { lat, lng }

    const mapOptions: google.maps.MapOptions = {
      center: position,
      zoom: zoom || GOOGLE_MAP.DEFAULT_ZOOM,
      mapId: GOOGLE_MAP.ID_STYLE,
      mapTypeControlOptions: {
        style: MapTypeControlStyle.DROPDOWN_MENU,
      },
      ...mapActions,
    }

    const map = new Map(mapRef.current as HTMLElement, mapOptions)
    if (isMarker) {
      const marker = new Marker({
        map,
        position,
        title: 'Destination',
      })
    } else {
      const origin = new LatLng(GOOGLE_MAP.ORIGIN_LAT, GOOGLE_MAP.ORIGIN_LNG)
      const destination = new LatLng(lat, lng)

      const request: google.maps.DirectionsRequest = {
        origin,
        destination,
        travelMode: TravelMode.DRIVING,
      }

      const directions = await directionsServices({ map, request })
      setRouteInfo(directions)
    }
  }

  useEffect(() => {
    initMap()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <GoogleMapBox ref={mapRef} />
      {!hideTripSummary && (
        <GoogleRouteInfo duration={routeInfo.duration} distance={routeInfo.distance} />
      )}
    </Box>
  )
}

export default GoogleMap
