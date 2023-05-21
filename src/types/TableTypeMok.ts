export type TableDataMok = {
  number: string
  orderNumber: number
  orderType: 'away' | 'dineIn' | 'delivery'
  amount: number
  status?: 'close' | 'open'
}
