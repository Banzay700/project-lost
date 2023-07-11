import { useState } from 'react'

export const useIsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleIsOpenModal = (delay?: number) => {
    setTimeout(() => setIsOpen((prevState) => !prevState), delay || 0)
  }

  return { isOpen, handleToggleIsOpenModal }
}
