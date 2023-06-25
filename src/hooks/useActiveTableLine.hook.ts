import { useEffect, useState } from 'react'
import { TableDataItem } from 'types'

export const useActiveTableLine = (data: TableDataItem[]) => {
  const [active, setActive] = useState<string | undefined>()

  useEffect(() => {
    if (data) {
      const firstElementID = data[0]?.id
      setActive(firstElementID)
    }
  }, [data])

  return { active, setActive }
}
