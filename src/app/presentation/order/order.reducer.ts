import { CollectionState, initialCollectionState } from '@ascendedco/architecture'
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import * as OrderActions from './order.actions'
import { Order } from '../../entity/order.entity'
import { createReducer, on } from '@ngrx/store'

export const orderFeatureKey = 'order'

export interface State extends CollectionState<Order> {
  // add additional state properties if necessary
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>()

export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  ...initialCollectionState,
})

export const reducer = createReducer(
  initialState,

  on(
    OrderActions.createOrder,
    OrderActions.createOrders,
    OrderActions.updateOrder,
    OrderActions.updateOrders,
    OrderActions.deleteOrder,
    OrderActions.deleteOrders,
    (state, action) => {
      return { ...state, loading: true }
    }
  ),

  on(OrderActions.upsertOrder, (state, action) => {
    return {
      ...adapter.upsertOne(action.order, state),
      loaded: true,
      loading: false
    }
  }),

  on(OrderActions.upsertOrders, (state, action) => {
    return {
      ...adapter.upsertMany(action.orders, state),
      loaded: true,
      loading: false
    }
  }),

  on(OrderActions.removeOrder, (state, action) => {
    return {
      ...adapter.removeOne(action.id, state),
      loading: false
    }
  }),

  on(OrderActions.removeOrders, (state, action) => {
    return {
      ...adapter.removeMany(action.ids, state),
      loading: false
    }
  }),

  on(OrderActions.clearOrders, (state) => adapter.removeAll(state))
)

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectAllOrders = selectAll
export const selectOrderEntities = selectEntities
export const selectOrderIds = selectIds
export const selectOrderTotal = selectTotal
