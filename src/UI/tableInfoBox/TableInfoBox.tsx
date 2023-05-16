import { FC } from 'react'
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { IconOval } from 'assets/icons'
import s from './TableInfoBox.module.scss'

interface TableInfoBoxProps {
  data: { time: string; description: string }[]
}

const TableInfoBox: FC<TableInfoBoxProps> = ({ data }) => {
  return (
    <Box className={s.wrapper}>
      <Typography className={s.title}>The table is reserved for the following dates:</Typography>
      <Stepper orientation="vertical">
        {data?.map(({ time, description }) => (
          <Step key={time} className={s.step}>
            <StepLabel className={s.stepLabel} StepIconComponent={IconOval}>
              <Typography className={s.time}>{time}</Typography>
              <Typography className={s.description}>{description}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default TableInfoBox
