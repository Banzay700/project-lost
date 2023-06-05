import { FC } from 'react'
import { Stack } from '@mui/material'
import { TablesReservationRow } from './tables-reservation-row'
import { Table } from './tables-reservation-row/table'
import { TablePlacementType } from '../ReservationCanvas.utils'

interface TablesReservationMapProps {
  placementMap: TablePlacementType
}

const TablesReservationMap: FC<TablesReservationMapProps> = ({ placementMap }) => {
  const { sectionOne, sectionTwo, sectionThree } = placementMap

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <TablesReservationRow>
        {sectionOne.map(({ tableNumber, seatsQuantity }) => (
          <Table key={tableNumber} tableNumber={tableNumber} seatsQuantity={seatsQuantity} />
        ))}
      </TablesReservationRow>
      <TablesReservationRow>
        {sectionTwo.map(({ tableNumber, seatsQuantity }) => (
          <Table key={tableNumber} tableNumber={tableNumber} seatsQuantity={seatsQuantity} />
        ))}
      </TablesReservationRow>
      <TablesReservationRow>
        {sectionThree.map(({ tableNumber, seatsQuantity }) => (
          <Table key={tableNumber} tableNumber={tableNumber} seatsQuantity={seatsQuantity} />
        ))}
      </TablesReservationRow>
    </Stack>
  )
}

export default TablesReservationMap
