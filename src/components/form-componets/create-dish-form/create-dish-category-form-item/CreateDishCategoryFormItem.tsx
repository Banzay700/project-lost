import { FC, useEffect, useState } from 'react'
import { FormHelperText, RadioGroup, Stack } from '@mui/material'
import { useFormikContext } from 'formik'
import { Button, Input, RadioButtonWithoutIcon, SelectInput } from 'UI'
import { InputSelectItemType, RadioButtonWithoutIconItemType } from 'types'
import { Icon } from 'assets'
import { correctionName } from 'utils'
import { useGetCategoriesQuery, useLazyGetSubCategoriesInCategoryQuery } from 'store/api'

const CreateDishCategoryFormItem: FC = () => {
  const { setFieldValue, getFieldMeta, isSubmitting } = useFormikContext()
  const [categoryState, setCategoryState] = useState<RadioButtonWithoutIconItemType[] | null>()
  const [trigger, { data: subCategory }] = useLazyGetSubCategoriesInCategoryQuery()
  const { data: category } = useGetCategoriesQuery(null)
  const [isNewSubcategory, setIsNewSubcategory] = useState(false)
  const selectCategory: InputSelectItemType[] | undefined = category?.map((item) => ({
    title: correctionName(item.title),
    value: item.title,
  }))

  const handleChangeCategory = (value: string) => {
    setFieldValue('subcategory', '')
    setIsNewSubcategory(false)
    trigger(value)
  }

  useEffect(() => {
    if (subCategory) {
      const valueRadio: RadioButtonWithoutIconItemType[] = subCategory.map((item) => ({
        name: 'subcategory',
        label: correctionName(item.title),
        value: item.id,
      }))
      setCategoryState(valueRadio)
    }
  }, [subCategory])

  useEffect(() => {
    if (isSubmitting) {
      setCategoryState(null)
    }
  }, [isSubmitting])

  const handleToggleIsNewSubcategory = () => {
    setFieldValue('subcategory', '')
    setFieldValue('newSubcategory', '')
    setIsNewSubcategory((prevState) => !prevState)
  }

  const categoryMeta = getFieldMeta('category')
  const subcategoryMeta = getFieldMeta('subcategory')

  return (
    <Stack sx={{ width: '100%' }}>
      <Stack sx={{ gap: '10px' }}>
        <SelectInput
          name="category"
          label="Category"
          data={selectCategory}
          handleValue={handleChangeCategory}
        />
        {categoryState && (
          <Stack direction="row" sx={{ gap: '10px', width: '100%', alignItems: 'center' }}>
            {!isNewSubcategory && (
              <RadioGroup sx={{ flexDirection: 'row', gap: '10px' }}>
                {categoryState?.map(({ name, value, label }) => (
                  <RadioButtonWithoutIcon key={value} name={name} value={value} label={label} />
                ))}
              </RadioGroup>
            )}
            {!isNewSubcategory && (
              <Button
                variant="text"
                size="small"
                icon={<Icon.Plus />}
                type="button"
                onClick={handleToggleIsNewSubcategory}
              />
            )}
            {isNewSubcategory && (
              <Stack direction="row" sx={{ alignItems: 'center', gap: '10px', width: '100%' }}>
                <Input
                  placeholder="New Subcategory"
                  name="newSubcategory"
                  label="New Subcategory"
                />
                <Icon.Cross style={{ cursor: 'pointer' }} onClick={handleToggleIsNewSubcategory} />
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
      {categoryMeta.touched && categoryMeta.error && (
        <FormHelperText error sx={{ ml: '14px' }}>
          {categoryMeta.error}
        </FormHelperText>
      )}
      {subcategoryMeta.touched && subcategoryMeta.error && (
        <FormHelperText error sx={{ ml: '14px' }}>
          {subcategoryMeta.error}
        </FormHelperText>
      )}
    </Stack>
  )
}

export default CreateDishCategoryFormItem
