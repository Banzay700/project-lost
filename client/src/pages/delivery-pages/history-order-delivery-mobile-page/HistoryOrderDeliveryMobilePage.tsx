import { FC, useEffect } from 'react'
import {
  ActionsButton,
  InfoDelivery,
  OrderDetailList,
  OrderLayout,
} from 'components/delivery-components'
import { generateTimeString } from 'utils/generateTimeString'
import { useNavigate, useParams } from 'react-router-dom'
import { useRootLocationPath } from 'hooks/useRootLocationPath.hook'
import { useGetByIDQuery } from 'store/api'
import { InfoDeliverySkeleton } from 'UI/skeleton'
import { useScreenTracking } from 'hooks/useScreenTracking'

const HistoryOrderDeliveryMobilePage: FC = () => {
  const { historyOrder } = useParams()
  const { location } = useRootLocationPath()
  const { isMobileScreen } = useScreenTracking()

  const { data, isFetching } = useGetByIDQuery(historyOrder || '')

  const navigate = useNavigate()

  const handleTakeDelivery = () => {
    navigate(`/${location}`)
  }

  useEffect(() => {
    if (!isMobileScreen) {
      navigate(`/${location}`)
    }
  }, [isMobileScreen, location, navigate])

  return (
    <OrderLayout titleHeader="History Order">
      {data && !isFetching && (
        <InfoDelivery
          deliveryAddress={data.address.street}
          orderNumber={data.order.orderNumber}
          clientName={data.clientInfo.name}
          readyToTime={generateTimeString(data.time)}
          status={data.status}
        />
      )}
      {isFetching && <InfoDeliverySkeleton />}
      <OrderDetailList ordersDetail={data?.order} isLoading={isFetching} />
      <ActionsButton titleButton="Back" onSubmit={handleTakeDelivery} />
    </OrderLayout>
  )
}

export default HistoryOrderDeliveryMobilePage
