import { FC } from 'react'
import { Stack } from '@mui/material'
import { TableCard } from 'components/reservation-bottom-bar/tables-cards-line/table-card'

interface TablesIconsLineProps {
  cards: string[]
}

const TablesCardsLine: FC<TablesIconsLineProps> = ({ cards }) => {
  return (
    <Stack sx={{ p: '0 15px', flexDirection: 'row', flex: 1, gap: '16px' }}>
      {cards.map((card) => (
        <TableCard key={card} tableNumber={card} />
      ))}
    </Stack>
  )
}

export default TablesCardsLine
