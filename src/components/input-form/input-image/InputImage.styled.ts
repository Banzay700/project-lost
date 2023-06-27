import styled from 'styled-components'
import { Box } from '@mui/material'
import DropZone from 'react-formik-ui/dist/components/DropZone/DropZone'

export const InputImageWrapper = styled(Box)`
  width: 300px;
  height: 300px;
  cursor: pointer;
`

export const DropZoneWrapper = styled(DropZone)<{ $view: 'round' | 'squareRounding' }>`
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  object-fit: cover;

  border-radius: ${({ $view }) => ($view === 'round' ? '50%' : '16px')};

  & .text {
    width: 50%;
    padding: 10px;
    text-align: center;
    user-select: none;
  }

  & .img-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
