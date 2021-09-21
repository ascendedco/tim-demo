import { CollectionState, initialCollectionState } from '@ascendedco/architecture'
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import * as ClientActions from './client.actions'
import { Client } from '../../entity/client.entity'
import { createReducer, on } from '@ngrx/store'

export const clientFeatureKey = 'client'

export interface State extends CollectionState<Client> {
  // add additional state properties if necessary
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>()

export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  ...initialCollectionState,
})

export const reducer = createReducer(
  initialState,

  on(
    ClientActions.createClient,
    ClientActions.createClients,
    ClientActions.updateClient,
    ClientActions.updateClients,
    ClientActions.deleteClient,
    ClientActions.deleteClients,
    (state, action) => {
      return { ...state, loading: true }
    }
  ),

  on(ClientActions.upsertClient, (state, action) => {
    return {
      ...adapter.upsertOne(action.client, state),
      loaded: true,
      loading: false
    }
  }),

  on(ClientActions.upsertClients, (state, action) => {
    return {
      ...adapter.upsertMany(action.clients, state),
      loaded: true,
      loading: false
    }
  }),

  on(ClientActions.removeClient, (state, action) => {
    return {
      ...adapter.removeOne(action.id, state),
      loading: false
    }
  }),

  on(ClientActions.removeClients, (state, action) => {
    return {
      ...adapter.removeMany(action.ids, state),
      loading: false
    }
  }),

  on(ClientActions.clearClients, (state) => adapter.removeAll(state))
)

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectAllClients = selectAll
export const selectClientEntities = selectEntities
export const selectClientIds = selectIds
export const selectClientTotal = selectTotal
