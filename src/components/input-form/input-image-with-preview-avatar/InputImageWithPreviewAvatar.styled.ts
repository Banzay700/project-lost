import styled from 'styled-components'

export const ImageWrapper = styled.img<{ $view: 'round' | 'squareRounding' }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $view }) => ($view === 'round' ? '50%' : '16px')};
`
