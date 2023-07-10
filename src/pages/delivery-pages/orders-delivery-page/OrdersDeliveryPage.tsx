import { FC } from 'react'
import {
  ContentRouteDeliveryMobile,
  IndicatorsGroup,
  ModalAddressInfo,
  SidebarDeliveryInfo,
  TableContent,
  NotifyError,
} from 'components'
import { PageActionsBar } from 'UI'
import { useGoogleMapStateAction, useIsModal, useScreenTracking, useUserReducer } from 'hooks'
import {
  useGetAllDeliveryQuery,
  useLazyGetByIDQuery,
  useUpdateDeliveryMutation,
  useLazySendNotifyQuery,
} from 'store/api'
import { Stack } from '@mui/material'
import { DeliveryAddressType } from 'types'
import { deliveryIndicatorItems, tableOrdersTitleDelivery } from './OrdersDeliveryPage.utils'

const OrdersDeliveryPage: FC = () => {
  const { isMobileScreen } = useScreenTracking()
  const { userState } = useUserReducer()
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const { state: googleMap, handleSetStateMap } = useGoogleMapStateAction()
  const { data, isFetching } = useGetAllDeliveryQuery({ courier: userState.id, status: 'opened' })
  const [getByIdDelivery, { isFetching: isFetchingDeliveryItem, data: deliveryOrderItem }] =
    useLazyGetByIDQuery()
  const [updateDelivery] = useUpdateDeliveryMutation()
  const [sendNotify, { isSuccess: isSuccessNotify, isError, error }] = useLazySendNotifyQuery()

  const handleClickLine = (id: string) => {
    getByIdDelivery(id)
  }

  const handleCloseDelivery = (id: string) => {
    if (deliveryOrderItem?.bill || data?.data[0]?.bill) {
      updateDelivery({
        id,
        courier: userState.id,
        status: 'closed',
        bill: deliveryOrderItem?.bill || data?.data[0]?.bill,
      })
    }
  }

  const handleCancelDelivery = (id: string) => {
    updateDelivery({ id })
  }

  const handleOpenGoogleMap = (value: DeliveryAddressType) => {
    handleSetStateMap(value)
    handleToggleIsOpenModal()
  }

  const handleSendNotify = (id: string) => {
    sendNotify(id || '')
  }

  return (
    <>
      {!!isSuccessNotify && <NotifyError isSuccess />}
      {!!isError && <NotifyError isError error={error} />}
      <Stack flex={1} height="100%" width="100%" overflow="auto">
        <PageActionsBar>
          <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
        </PageActionsBar>
        {isMobileScreen && <ContentRouteDeliveryMobile data={data} isLoading={isFetching} />}
        {!isMobileScreen && (
          <TableContent
            tableTitle={tableOrdersTitleDelivery}
            isLoading={isFetching}
            data={data?.data}
            isActiveLine={deliveryOrderItem?.id || data?.data[0]?.id}
            onClickLine={handleClickLine}
            onClickAction={handleSendNotify}
            onClickOpenInfoAddress={handleOpenGoogleMap}
          />
        )}
      </Stack>
      {!isMobileScreen && (
        <SidebarDeliveryInfo
          deliveryId={deliveryOrderItem?.id || data?.data[0]?.id}
          withButtonCancel
          statusCheck
          onCancel={handleCancelDelivery}
          onSubmit={handleCloseDelivery}
          orderDetail={deliveryOrderItem?.order || data?.data[0]?.order}
          titleButton={
            (deliveryOrderItem?.order?.status || data?.data[0]?.order?.status) === 'opened'
              ? 'Cooking'
              : 'Done'
          }
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

export default OrdersDeliveryPage
