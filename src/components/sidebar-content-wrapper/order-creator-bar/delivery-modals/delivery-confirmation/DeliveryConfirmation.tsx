import { FC } from 'react'
import { Stack } from '@mui/material'
import { TableDeliveryLine } from 'components/index'
import { Table } from 'UI'
import { DeliveryFormType, OrderActiveType } from 'types'
import { TAX } from 'utils'
import { deliveryTitle } from './deliveryConfirmation.utils'
import DeliveryInfo from './delivery-info/DeliveryInfo'

interface DeliveryConfirmationProps {
  data: OrderActiveType
  deliveryForm: DeliveryFormType | undefined
}

const DeliveryConfirmation: FC<DeliveryConfirmationProps> = ({ data, deliveryForm }) => {
  return (
    <Stack spacing={4.8}>
      <Table tableTitles={deliveryTitle} tableMinWidth="720px" tableMaxHeight="200px">
        {data.dishes.map((el) => (
          <TableDeliveryLine element={el} key={el.id} tax={TAX} />
        ))}
      </Table>
      <DeliveryInfo data={data} deliveryForm={deliveryForm} tax={TAX} />
    </Stack>
  )
}

export default DeliveryConfirmation
