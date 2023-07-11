export interface RadioButtonCardContentItemType {
  id: string
  orderNumber: number
  clientName: string
  deliveryAddress: string
  timeToReady: string
  status?: { label: string; type: 'red' | 'primary' | 'green' }
}

export interface RadioButtonCardDeliveryItemType extends RadioButtonCardContentItemType {
  isChecked?: string
  onChange: (value: string) => void
}
