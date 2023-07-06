import { FC, useEffect } from 'react'
import {
  useGetCategoriesQuery,
  useGetTopSalesCategoryQuery,
  useLazyGetTopSalesCategoryQuery,
} from 'store/api'
import { HorizontalChart } from 'components'
import { NativeSelect } from 'UI'
import { NativeSelectItemType } from 'types'
import { correctionName } from 'utils/correctionName'
import { StatisticsSalesTopCategoryWrapper } from './StatisticsSalesTopCategory.styled'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StatisticsSalesTopCategoryProps {}

const StatisticsSalesTopCategory: FC<StatisticsSalesTopCategoryProps> = () => {
  const [changeCategory, { data: DataTopCategory }] = useLazyGetTopSalesCategoryQuery()
  const { data: DataCategory } = useGetCategoriesQuery(null)

  const updateDataCategory: NativeSelectItemType[] | undefined =
    DataCategory &&
    DataCategory.map((item) => ({ value: item.id, label: correctionName(item.title) }))

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
    <StatisticsSalesTopCategoryWrapper>
      {updateDataCategory && (
        <NativeSelect
          data={updateDataCategory}
          defaultTitle="TOP CATEGORY CHART"
          onChange={handleChangeCategory}
        />
      )}
      {DataTopCategory && <HorizontalChart data={DataTopCategory} />}
    </StatisticsSalesTopCategoryWrapper>
  )
}

export default StatisticsSalesTopCategory
