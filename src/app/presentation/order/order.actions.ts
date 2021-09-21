import { createAction, props } from '@ngrx/store'
import { Order } from '../../entity/order.entity'

// Synchronous Actions: Handled by Reducers

export const upsertOrder = createAction(
  '[Order] Upsert Order',
  props<{ order: Order }>()
)

export const upsertOrders = createAction(
  '[Order] Upsert Orders',
  props<{ orders: Order[] }>()
)

export const removeOrder = createAction(
  '[Order] Remove Order',
  props<{ id: string }>()
)

export const removeOrders = createAction(
  '[Order] Remove Orders',
  props<{ ids: string[] }>()
)

export const clearOrders = createAction(
  '[Order] Clear Orders'
)

// Asynchronous Actions: Handled by Effects

export const loadOrder = createAction(
  '[Order] Load Order',
  props<{ id: string }>()
)

export const loadOrders = createAction(
  '[Order] Load Orders'
)

export const createOrder = createAction(
  '[Order] Create Order',
  props<{ order: Order }>()
)

export const createOrders = createAction(
  '[Order] Create Orders',
  props<{ orders: Order[] }>()
)

export const updateOrder = createAction(
  '[Order] Update Order',
  props<{ order: Order }>()
)

export const updateOrders = createAction(
  '[Order] Update Orders',
  props<{ orders: Order[] }>()
)

export const deleteOrder = createAction(
  '[Order] Delete Order',
  props<{ order: Order }>()
)

export const deleteOrders = createAction(
  '[Order] Delete Orders',
  props<{ orders: Order[] }>()
)
