import { FilterMenuItemType } from 'types/ComponentsItemType'
import { correctionName } from 'utils/correctionName'
import { DishSubCategoriesResponseType } from 'types/DishType'

type GenerateItems = (data?: DishSubCategoriesResponseType[]) => FilterMenuItemType[] | undefined

export const DISHES_PER_PAGE = 12

export const generateFilterItems: GenerateItems = (data) => {
  return (
    data &&
    data.map((item) => ({
      label: correctionName(item.title),
      value: item.title,
    }))
  )
}
