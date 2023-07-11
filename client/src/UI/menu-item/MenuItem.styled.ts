import { Box, MenuItem } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuItemWrapper = styled(MenuItem)`
  min-width: 200px;
  padding: 0;
`

export const MenuItemLink = styled(Link)`
  width: 100%;
  padding: 6px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const MenuItemButton = styled(Box)`
  width: 100%;
  padding: 6px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`
