import { FC, useEffect, useState } from 'react'
import {
  ContentRouteDeliveryMobile,
  IndicatorsGroup,
  ModalAddressInfo,
  SidebarDeliveryInfo,
  TableContent,
} from 'components'
import { useGoogleMapStateAction, useIsModal, useScreenTracking, useUserReducer } from 'hooks'
import { PageActionsBar } from 'UI'
import { useGetAllDeliveryQuery, useLazyGetByIDQuery, useUpdateDeliveryMutation } from 'store/api'
import { Stack } from '@mui/material'
import { DeliveryAddressType, DeliveryType } from 'types/DeliveryType'
import { deliveryIndicatorItems, tableHomeTitleDelivery } from './homeDeliveryPage.utils'

const HomeDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { isOpen, handleToggleIsOpenModal } = useIsModal()

  const { data, isFetching } = useGetAllDeliveryQuery({})
  const [getByIdDelivery, { isFetching: isFetchingDeliveryItem, data: deliveryOrderItem }] =
    useLazyGetByIDQuery()
  const [updateDelivery] = useUpdateDeliveryMutation()

  const { state: googleMap, handleSetStateMap } = useGoogleMapStateAction()
  const [detailDeliveryActiveLine, setDetailDeliveryActiveLine] = useState<
    DeliveryType | undefined
  >(data?.data[0])

  const handleClickLine = (id: string) => {
    getByIdDelivery(id)
  }

  const handleTakeDelivery = (id: string) => {
    updateDelivery({ id, courier: userState.id })
    const findId = data?.data?.find((item) => item.id !== id)
    getByIdDelivery(findId?.id || data?.data[1]?.id || '')
  }

  const handleOpenGoogleMap = (value: DeliveryAddressType) => {
    handleSetStateMap(value)
    handleToggleIsOpenModal()
  }

  useEffect(() => {
    setDetailDeliveryActiveLine(deliveryOrderItem)
  }, [deliveryOrderItem, data?.data])

  useEffect(() => {
    setDetailDeliveryActiveLine(data?.data[0])
  }, [data?.data])

  return (
    <>
      <Stack flex={1} height="100%" width="100%" overflow="auto">
        <PageActionsBar>
          <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
        </PageActionsBar>
        {isMobileScreen && <ContentRouteDeliveryMobile data={data} isLoading={isFetching} />}
        {!isMobileScreen && (
          <TableContent
            tableTitle={tableHomeTitleDelivery}
            isLoading={isFetching}
            data={data?.data}
            isActiveLine={detailDeliveryActiveLine?.id}
            onClickLine={handleClickLine}
            onClickOpenInfoAddress={handleOpenGoogleMap}
          />
        )}
      </Stack>
      {!isMobileScreen && (
        <SidebarDeliveryInfo
          onSubmit={handleTakeDelivery}
          deliveryInfo={detailDeliveryActiveLine}
          titleButton="Take Delivery"
          isLoading={isFetchingDeliveryItem}
        />
      )}
      {googleMap && (
        <ModalAddressInfo
          address={googleMap.street}
          lat={googleMap.latitude}
          lng={googleMap.longitude}
          isOpen={isOpen}
          onOpenModal={handleToggleIsOpenModal}
        />
      )}
    </>
  )
}

export default HomeDeliveryPage
