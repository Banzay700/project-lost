import { FC, useState } from 'react'
import { ReservationResponseType } from 'types/index'
import { Collapse, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { ColumnInfoChip, ColumnText, ColumnCollapseReservation } from 'UI/index'

interface TableReservationLineProps {
  element: ReservationResponseType
}

const TableReservationLine: FC<TableReservationLineProps> = ({ element }) => {
  const [open, setOpen] = useState(false)
  const { time, clientName, phoneNumber, table, status, user, email, notes, date } = element
  const backgroundColor = open ? 'rgba(0, 0, 0, 0.04)' : 'initial'

  const handleLineWrapperClick = () => setOpen(!open)

  return (
    <>
      <TableRow
        hover
        sx={{
          '& td:last-child': {
            paddingRight: '0px',
          },
          cursor: 'pointer',
          backgroundColor,
          height: '65px',
        }}
        onClick={handleLineWrapperClick}>
        <ColumnText title={clientName} />
        <ColumnText title={time} />
        {table && <ColumnText title={table.number} />}
        <ColumnInfoChip type={status} />
      </TableRow>
      <TableRow
        sx={{
          backgroundColor: 'rgba(0,0,0,0.02)',
          borderBottom: 'none',
        }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table>
              <TableBody>
                <ColumnCollapseReservation data={date} label="Date" />
                <ColumnCollapseReservation data={user} label="Client" />
                <ColumnCollapseReservation data={email} label="Email" />
                <ColumnCollapseReservation data={phoneNumber} label="Phone Number" />
                <ColumnCollapseReservation data={notes} label="Notes" />
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default TableReservationLine
