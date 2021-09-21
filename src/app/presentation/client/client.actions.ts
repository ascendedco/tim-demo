import { createAction, props } from '@ngrx/store'
import { Client } from '../../entity/client.entity'

// Synchronous Actions: Handled by Reducers

export const upsertClient = createAction(
  '[Client] Upsert Client',
  props<{ client: Client }>()
)

export const upsertClients = createAction(
  '[Client] Upsert Clients',
  props<{ clients: Client[] }>()
)

export const removeClient = createAction(
  '[Client] Remove Client',
  props<{ id: string }>()
)

export const removeClients = createAction(
  '[Client] Remove Clients',
  props<{ ids: string[] }>()
)

export const clearClients = createAction(
  '[Client] Clear Clients'
)

// Asynchronous Actions: Handled by Effects

export const loadClient = createAction(
  '[Client] Load Client',
  props<{ id: string }>()
)

export const loadClients = createAction(
  '[Client] Load Clients'
)

export const createClient = createAction(
  '[Client] Create Client',
  props<{ client: Client }>()
)

export const createClients = createAction(
  '[Client] Create Clients',
  props<{ clients: Client[] }>()
)

export const updateClient = createAction(
  '[Client] Update Client',
  props<{ client: Client }>()
)

export const updateClients = createAction(
  '[Client] Update Clients',
  props<{ clients: Client[] }>()
)

export const deleteClient = createAction(
  '[Client] Delete Client',
  props<{ client: Client }>()
)

export const deleteClients = createAction(
  '[Client] Delete Clients',
  props<{ clients: Client[] }>()
)
