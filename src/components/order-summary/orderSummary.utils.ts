export const calculateValues = (total: number, tax: number) => {
  const taxValue = Math.round((total / 100) * tax)
  const totalValue = total + taxValue

  return { taxValue, totalValue }
}
