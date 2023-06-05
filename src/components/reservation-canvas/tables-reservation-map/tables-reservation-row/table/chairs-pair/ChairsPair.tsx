import { FC } from 'react'
import { Box } from '@mui/material'

const ChairsPair: FC = () => {
  const commonChairProps = {
    position: 'absolute',
    bgcolor: '#FFFFFF',
    width: '14px',
    height: '50px',
    borderRadius: '30px',
    border: '1px solid #E4E4E4',
    top: '50%',
    transform: 'translateY(-50%)',
  }

  return (
    <>
      <Box sx={{ ...commonChairProps, right: '-21px' }} />
      <Box sx={{ ...commonChairProps, left: '-21px' }} />
    </>
  )
}

export default ChairsPair
