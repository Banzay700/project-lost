import { FC, useEffect, useState } from 'react'
import { SelectInput } from 'UI/select-input'
import { RadioGroup, Stack } from '@mui/material'
import { RadioButtonWithoutIcon } from 'UI'
import { InputSelectItemType, RadioButtonWithoutIconItemType } from 'types'
import { useGetCategoriesQuery, useLazyGetSubCategoriesInCategoryQuery } from 'store/api'
import { correctionName } from 'utils/correctionName'
import { useFormikContext } from 'formik'

const FormCreateDishCategoryItem: FC = () => {
  const { setFieldValue } = useFormikContext()
  const [categoryState, setCategoryState] = useState<RadioButtonWithoutIconItemType[]>()
  const { data: category } = useGetCategoriesQuery(null)
  const [trigger, { data: subCategory }] = useLazyGetSubCategoriesInCategoryQuery()
  const selectCategory: InputSelectItemType[] | undefined = category?.map((item) => ({
    title: correctionName(item.title),
    value: item.title,
  }))

  const handleChangeCategory = (value: string) => {
    setFieldValue('category', '')
    trigger(value)
  }
  useEffect(() => {
    if (subCategory) {
      const valueRadio: RadioButtonWithoutIconItemType[] = subCategory.map((item) => ({
        name: 'category',
        label: correctionName(item.title),
        value: item.id,
      }))
      setCategoryState(valueRadio)
    }
  }, [subCategory])

  return (
    <>
      <SelectInput
        name="globalCategory"
        label="Category"
        data={selectCategory}
        handleValue={handleChangeCategory}
      />
      <RadioGroup>
        <Stack direction="row">
          {categoryState?.map(({ name, value, label }) => (
            <RadioButtonWithoutIcon key={value} name={name} value={value} label={label} />
          ))}
        </Stack>
      </RadioGroup>
    </>
  )
}

export default FormCreateDishCategoryItem
