import { FC, useEffect, useState } from 'react'
import { FormHelperText, RadioGroup, Stack } from '@mui/material'
import { Button, Input, RadioButtonWithoutIcon, SelectInput } from 'UI'
import { InputSelectItemType, RadioButtonWithoutIconItemType } from 'types'
import { useGetCategoriesQuery, useLazyGetSubCategoriesInCategoryQuery } from 'store/api'
import { correctionName } from 'utils'
import { useFormikContext } from 'formik'
import { IconCross, IconPlus } from 'assets/icons'

const CreateDishCategoryFormItem: FC = () => {
  const { setFieldValue, getFieldMeta } = useFormikContext()
  const [categoryState, setCategoryState] = useState<RadioButtonWithoutIconItemType[]>()
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

  const handleToggleIsNewSubcategory = () => {
    setFieldValue('subcategory', '')
    setFieldValue('newSubcategory', '')
    setIsNewSubcategory((prevState) => !prevState)
  }

  const categoryMeta = getFieldMeta('category')
  const subcategoryMeta = getFieldMeta('subcategory')

  return (
    <Stack>
      <Stack sx={{ gap: '10px' }}>
        <SelectInput
          name="category"
          label="Category"
          data={selectCategory}
          handleValue={handleChangeCategory}
        />
        {subCategory && (
          <Stack direction="row" sx={{ gap: '10px', width: '100%' }}>
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
                icon={<IconPlus />}
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
                <IconCross style={{ cursor: 'pointer' }} onClick={handleToggleIsNewSubcategory} />
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
      {categoryMeta.touched && categoryMeta.error && (
        <FormHelperText error sx={{ ml: '14px' }}>
          {categoryMeta.error}
        </FormHelperText>
      )}{' '}
      {subcategoryMeta.touched && subcategoryMeta.error && (
        <FormHelperText error sx={{ ml: '14px' }}>
          {subcategoryMeta.error}
        </FormHelperText>
      )}
    </Stack>
  )
}

export default CreateDishCategoryFormItem
