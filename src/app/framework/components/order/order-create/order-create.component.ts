import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'
import { Order } from '../../../../entity/order.entity'
import { createOrder } from '../../../../presentation/order/order.actions'
import { getOrdersLoading } from '../../../../presentation/order/order.selectors'

import { getAllClients } from '../../../../presentation/client/client.selectors'
import { Client } from '../../../../entity/client.entity'


@Component({
  selector: 'order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent implements OnInit {

  clients$: Observable<Client[]>
  loading$: Observable<boolean>
  form: FormGroup

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.clients$ = this.store.pipe(select(getAllClients))
    this.loading$ = this.store.pipe(select(getOrdersLoading))
    this.clearForm()
  }

  clearForm() {
    this.form = new FormGroup({
      orderNumber: new FormControl(null, Validators.required),
      clientId: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      total: new FormControl(null, Validators.required),
    })
  }

  validate() {
    if (this.form.valid) this.uploadOrder()
    else validateFields(this.form)
  }

  uploadOrder() {
    let order: Order = {
      id: '',
      created: new Date(),
      updated: new Date(),
      orderNumber: this.form.controls['orderNumber'].value,
      clientId: this.form.controls['clientId'].value,
      quantity: this.form.controls['quantity'].value,
      total: this.form.controls['total'].value,
    }

    this.store.dispatch(createOrder({ order: order }))
  }
}
