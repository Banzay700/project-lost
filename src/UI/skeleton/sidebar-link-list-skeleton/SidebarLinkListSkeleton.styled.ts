import styled from 'styled-components'
import { List, ListItem } from '@mui/material'

export const SidebarListWrapper = styled(List)`
  width: 110px;
  height: 100%;
  min-width: 110px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    width: 90px;
    min-width: 90px;
    padding: 14px;
    gap: 8px;
  }
`

export const SidebarLinkListSkeletonWrapper = styled(ListItem)`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 6px;
`
