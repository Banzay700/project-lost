import { FC } from 'react'
import { Skeleton, TableCell, TableRow, Typography } from '@mui/material'
import { generateArray } from 'utils/generateArray'

interface TableLineSkeletonProps {
  sizeColumn: string[]
}

const TableLineSkeleton: FC<TableLineSkeletonProps> = ({ sizeColumn }) => {
  const generateArr = generateArray(8)
  return (
    <>
      {generateArr.map((itemRow) => (
        <TableRow key={itemRow}>
          {sizeColumn?.map((itemColumn) => (
            <TableCell key={itemColumn}>
              <Typography component="p">
                <Skeleton />
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}

export default TableLineSkeleton
