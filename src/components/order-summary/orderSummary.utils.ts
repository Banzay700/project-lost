export const calculateValues = (total: number, tax: number) => {
  const taxValue = ((total / 100) * tax).toFixed(1)
  const totalValue = total + Number(taxValue)

  return { taxValue, totalValue }
}
