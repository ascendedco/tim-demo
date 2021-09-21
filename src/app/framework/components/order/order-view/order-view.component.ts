import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { Order } from '../../../../entity/order.entity'
import { getAllOrders, getOrdersLoading } from '../../../../presentation/order/order.selectors'
import { deleteOrder } from '../../../../presentation/order/order.actions'
import { State } from '../../../../presentation'

@Component({
  selector: 'order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
})
export class OrderViewComponent implements OnInit {

  /* TODO: Add / configure required table fields */
  displayedColumns: string[] = ['orderNumber','clientId','quantity','total', 'actions']
  loading$: Observable<boolean>
  order$: Observable<Order[]>

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getOrdersLoading))
    this.order$ = this.store.pipe(select(getAllOrders))
  }

  delete(order: Order) {
    // Todo: show modal that prompts for delete
    this.store.dispatch(deleteOrder({ order: order }))
  }
}
