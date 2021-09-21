import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { OrderNetwork } from '../../domain/gateways/network/order.network'
import * as OrderActions from './order.actions'
import { Order } from '../../entity/order.entity'

@Injectable()
export class OrderEffects {

  constructor(private actions$: Actions, private network: OrderNetwork) {}

  @Effect()
  loadOrder$ = this.actions$.pipe(
    ofType(OrderActions.loadOrder),
    switchMap((action) => this.network.read(action.id).pipe(
      map((order: Order) => OrderActions.upsertOrder({ order: order })),
      catchError(error => {
        return of({
          type: '[Error] Load Orders',
          payload: error
        })
      })
    ))
  )

  @Effect()
  loadOrders$ = this.actions$.pipe(
    ofType(OrderActions.loadOrders),
    switchMap((action) => this.network.readList().pipe(
      map((orders: Order[]) => OrderActions.upsertOrders({ orders: orders })),
      catchError(error => {
        return of({
          type: '[Error] Load Orders',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createOrder$ = this.actions$.pipe(
    ofType(OrderActions.createOrder),
    switchMap((action) => this.network.create(action.order).pipe(
      map((order: Order) => OrderActions.upsertOrder({ order: order })),
      catchError(error => {
        return of({
          type: '[Error] Create Order',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createOrders$ = this.actions$.pipe(
    ofType(OrderActions.createOrders),
    switchMap((action) => this.network.createList(action.orders).pipe(
      map((orders: Order[]) => OrderActions.upsertOrders({ orders: orders })),
      catchError(error => {
        return of({
          type: '[Error] Create Orders',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateOrder$ = this.actions$.pipe(
    ofType(OrderActions.updateOrder),
    switchMap((action) => this.network.update(action.order).pipe(
      map((order: Order) => OrderActions.upsertOrder({ order: order })),
      catchError(error => {
        return of({
          type: '[Error] Update Order',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateOrders$ = this.actions$.pipe(
    ofType(OrderActions.updateOrders),
    switchMap((action) => this.network.updateList(action.orders).pipe(
      map((orders: Order[]) => OrderActions.upsertOrders({ orders: orders })),
      catchError(error => {
        return of({
          type: '[Error] Update Orders',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteOrder$ = this.actions$.pipe(
    ofType(OrderActions.deleteOrder),
    switchMap((action) => this.network.delete(action.order).pipe(
      map((order: Order) => OrderActions.removeOrder({ id: order.id })),
      catchError(error => {
        return of({
          type: '[Error] Delete Order',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteOrders$ = this.actions$.pipe(
    ofType(OrderActions.deleteOrders),
    switchMap((action) => this.network.deleteList(action.orders).pipe(
      map((orders: Order[]) => OrderActions.removeOrders({ ids: orders.map(order => order.id) })),
      catchError(error => {
        return of({
          type: '[Error] Delete Orders',
          payload: error
        })
      })
    ))
  )
}
