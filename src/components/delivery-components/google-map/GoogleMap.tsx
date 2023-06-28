import { CSSProperties, FC, useEffect, useRef } from 'react'
import { Box } from '@mui/material'

interface GoogleMapProps {
  lat: number
  lng: number
  height?: CSSProperties['height']
  width?: CSSProperties['width']
  zoom?: number
}

const GoogleMap: FC<GoogleMapProps> = ({ lat, lng, height, width, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null)

  const initMap = async () => {
    let map: google.maps.Map | null = null
    let marker: google.maps.Marker | null = null
    const { maps } = await window.google
    const position = { lat: 50.52073439999999, lng: 30.2461634 }

    map = new maps.Map(mapRef.current as HTMLElement, {
      center: position,
      zoom: 14,
      mapId: 'b1b2ca9ab1dc851c', // b1b2ca9ab1dc851c
    })

    marker = new maps.Marker({
      map,
      position,
      title: 'Destination',
    })
  }

  useEffect(() => {
    initMap()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box ref={mapRef} sx={{ height: '100%', width: '100%' }} />
    </Box>
  )
}

export default GoogleMap
