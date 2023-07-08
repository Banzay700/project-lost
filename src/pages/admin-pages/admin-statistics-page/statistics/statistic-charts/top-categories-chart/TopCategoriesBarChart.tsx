import { FC, useEffect } from 'react'
import { useGetCategoriesQuery, useLazyGetTopSalesCategoryQuery } from 'store/api'
import { HorizontalChart, ChartContainer } from 'components'

import { NativeSelectItemType } from 'types'
import { correctionName } from 'utils'

const TopCategoriesBarChart: FC = () => {
  const [changeCategory, { data: dataTopCategory }] = useLazyGetTopSalesCategoryQuery()
  const { data: dataCategory } = useGetCategoriesQuery(null)

  const updateDataCategory: NativeSelectItemType[] | undefined =
    dataCategory &&
    dataCategory.map((item) => ({ value: item.id, label: correctionName(item.title) }))

  const handleChangeCategory = (id: string) => {
    if (id) {
      changeCategory({ category: id })
    } else {
      changeCategory({})
    }
  }

  useEffect(() => {
    changeCategory({})
  }, [changeCategory])

  return (
    <ChartContainer
      size={5}
      selectDefaultTitle="Top catecories"
      selectData={updateDataCategory}
      onSelectChange={handleChangeCategory}>
      {dataTopCategory && <HorizontalChart data={dataTopCategory} title="Top Sales" />}
    </ChartContainer>
  )
}

export default TopCategoriesBarChart
