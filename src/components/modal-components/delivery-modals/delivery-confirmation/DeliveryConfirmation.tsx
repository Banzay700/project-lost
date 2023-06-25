import { FC } from 'react'
import { Stack } from '@mui/material'
import { TableDeliveryLine } from 'components/index'
import { Table } from 'UI/index'
import { DeliveryFormType, OrderActiveType } from 'types/index'
import { TAX } from 'utils/index'
import { deliveryTitle } from './deliveryConfirmation.utils'
import DeliveryInfo from './delivery-info/DeliveryInfo'

interface DeliveryConfirmationProps {
  data: OrderActiveType
  deliveryForm: DeliveryFormType | undefined
}

const DeliveryConfirmation: FC<DeliveryConfirmationProps> = ({ data, deliveryForm }) => {
  return (
    <Stack spacing={8}>
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
