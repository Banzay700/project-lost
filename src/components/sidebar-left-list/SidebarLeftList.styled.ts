import { List } from '@mui/material'
import styled from 'styled-components'

export const SidebarWrapper = styled(List)`
  width: 110px;
  height: 100%;
  min-width: 110px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  //TODO переделать с брекпоинтами
  @media (max-width: 1280px) {
    width: 90px;
    min-width: 90px;
    padding: 14px;
    gap: 8px;
  }
`
