import { FC, useEffect } from 'react'
import { ActionsButton, OrderLayout, GoogleMap } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScreenTracking } from 'hooks'
import { ROUTES_DELIVERY } from 'routes'

const DirectionMobilePage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isMobileScreen } = useScreenTracking()
  const searchParams = new URLSearchParams(location.search)
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  useEffect(() => {
    if (!isMobileScreen) {
      navigate(`/${ROUTES_DELIVERY.DELIVERY}`)
    }
  }, [isMobileScreen, navigate])

  return (
    <OrderLayout titleHeader="Direction">
      <GoogleMap lat={Number(lat)} lng={Number(lng)} mapActions={{ mapTypeControl: false }} />
      <ActionsButton titleButton="Back" onSubmit={() => navigate(-1)} />
    </OrderLayout>
  )
}

export default DirectionMobilePage
