import { ActionReducerMap } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromRouter from './router/router.reducer';
import * as fromOrder from './order/order.reducer';
import { OrderEffects } from './order/order.effects';
import * as fromClient from './client/client.reducer';
import { ClientEffects } from './client/client.effects'

export interface State {
  router: RouterReducerState<fromRouter.State>
  [fromOrder.orderFeatureKey]: fromOrder.State;
  [fromClient.clientFeatureKey]: fromClient.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  [fromOrder.orderFeatureKey]: fromOrder.reducer,
  [fromClient.clientFeatureKey]: fromClient.reducer,
}

export const effects = [
  OrderEffects,
  ClientEffects
]
