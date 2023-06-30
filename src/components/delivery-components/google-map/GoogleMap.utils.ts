import { TripSummaryType, DirectionsServicesType } from 'types'

export const directionsServices = async (props: DirectionsServicesType): TripSummaryType => {
  const { map, request } = props
  const { DirectionsService, DirectionsRenderer } = await window.google.maps

  const directionsService = new DirectionsService()
  const directionsRenderer = new DirectionsRenderer({
    map,
  })
  return new Promise((resolve, reject) => {
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
        const leg = result?.routes[0].legs[0]
        resolve({
          duration: leg?.duration?.text || '',
          distance: leg?.distance?.text || '',
        })
      } else {
        reject(new Error('Directions request failed'))
      }
    })
  })
}
