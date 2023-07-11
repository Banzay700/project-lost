export const calculateTotalPriceWithTax = (
  total: number,
  tax: number,
  tip?: number,
): { taxValue: number; totalValue: number } => {
  const taxValue = Math.round((total / 100) * tax)
  const totalValue = total + taxValue + (tip ?? 0)

  return { taxValue, totalValue }
}
