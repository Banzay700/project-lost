import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useControlScrollWithButton = <T extends HTMLElement>() => {
  const scrollContainerRef = useRef<T>(null)
  const { pathname } = useLocation()
  const scrollStep = 240

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= scrollStep
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += scrollStep
  }

  useEffect(() => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0
  }, [pathname])

  return { scrollContainerRef, handleScrollLeft, handleScrollRight }
}
