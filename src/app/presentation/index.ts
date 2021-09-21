import { ActionReducerMap } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromRouter from './router/router.reducer'

export interface State {
  router: RouterReducerState<fromRouter.State>
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
}

export const effects = []
