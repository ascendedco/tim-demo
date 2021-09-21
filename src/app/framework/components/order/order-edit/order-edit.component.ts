import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'

import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'
import { Order } from '../../../../entity/order.entity'
import { updateOrder } from '../../../../presentation/order/order.actions'
import { getCurrentOrder, getOrdersLoading } from '../../../../presentation/order/order.selectors'

import { getAllClients } from '../../../../presentation/client/client.selectors'
import { Client } from '../../../../entity/client.entity'


@Component({
  selector: 'order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  clients$: Observable<Client[]>
  loading$: Observable<boolean>
  order$: Observable<Order>
  form: FormGroup

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.clearForm()
    this.order$ = this.store.pipe(select(getCurrentOrder), tap(order => this.updateForm(order)))
    this.clients$ = this.store.pipe(select(getAllClients))
    this.loading$ = this.store.pipe(select(getOrdersLoading))
  }

  clearForm() {
    this.form = new FormGroup({
      orderNumber: new FormControl(null, Validators.required),
      clientId: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      total: new FormControl(null, Validators.required),
    })
  }

  updateForm(order: Order) {
    if (order !== null) this.form.patchValue({
      // name: order.name,
      orderNumber: order.orderNumber,
      clientId: order.clientId,
      quantity: order.quantity,
      total: order.total,
    })
  }

  validate(order: Order) {
    if (this.form.valid) this.uploadOrder(order)
    else validateFields(this.form)
  }

  uploadOrder(order: Order) {
    let updated: Order = {
      ...order,
      orderNumber: this.form.controls['orderNumber'].value,
      clientId: this.form.controls['clientId'].value,
      quantity: this.form.controls['quantity'].value,
      total: this.form.controls['total'].value,
    }

    this.store.dispatch(updateOrder({ order: updated }))
  }
}
