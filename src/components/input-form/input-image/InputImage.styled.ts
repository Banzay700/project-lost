// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled from 'styled-components'
import { Box } from '@mui/material'
import { theme } from 'theme'
import DropZone from 'react-formik-ui/dist/components/DropZone/DropZone'

interface DropZoneWrapperProps {
  view: 'round' | 'squareRounding'
}

export const InputImageWrapper = styled(Box)(() => ({
  width: '300px',
  height: '300px',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },
}))

export const DropZoneWrapper = styled(DropZone)<DropZoneWrapperProps>(({ $view }) => ({
  width: '300px',
  height: '300px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: theme.palette.border.default,
  objectFit: 'cover',
  borderRadius: $view === 'round' ? '50%' : '16px',
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },

  '& .text': {
    width: '50%',
    padding: '10px',
    textAlign: 'center',
    userSelect: 'none',
  },

  '& .img-thumbnail': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))
