import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface UseRelocateDefaultLocationProps {
  isParams?: string
  relocateTo: string
}

export const useRelocateDefaultLocation = ({
  isParams,
  relocateTo,
}: UseRelocateDefaultLocationProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isParams) {
      navigate(relocateTo)
    }
  }, [isParams, relocateTo, navigate])
}
