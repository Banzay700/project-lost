import { RefObject, useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

export const useSmoothScrollbar = <T extends HTMLElement>(width?: string): RefObject<T> => {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      const scrollbar = Scrollbar.init(container, { damping: 0.1 })

      if (width) {
        scrollbar.track.yAxis.element.style.width = width
      }
    }

    return () => {
      if (container) {
        Scrollbar.destroy(container)
      }
    }
  }, [width])

  return containerRef
}
