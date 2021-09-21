import { Entity } from '@ascendedco/architecture'

export interface Order extends Entity {
  orderNumber: string
  clientId: string
  quantity: number
  total: number
}
