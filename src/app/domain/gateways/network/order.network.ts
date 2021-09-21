import { Gateway } from '@ascendedco/architecture'
import { Order } from '../../../entity/order.entity'

export abstract class OrderNetwork extends Gateway<Order> {

}
