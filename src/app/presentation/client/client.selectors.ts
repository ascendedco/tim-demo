import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllClients, selectClientEntities, State } from './client.reducer'
import { getParams } from '../router/router.selectors'

export const getClientFeature = createFeatureSelector<State>('client')
export const getAllClients = createSelector(getClientFeature, selectAllClients)
export const getClientEntities = createSelector(getClientFeature, selectClientEntities)
export const getClientsLoaded = createSelector(getClientFeature, (state) => state.loaded)
export const getClientsLoading = createSelector(getClientFeature, (state) => state.loading)

export const getCurrentClient = createSelector(
  getParams,
  getClientEntities,
  (params, entities) => {
    if (entities[params.id] === undefined) return null
    else return entities[params.id]
  }
)

export const getClientById = createSelector(
  getClientEntities,
  (entities) => (id: string) => {
    if (entities[id] === undefined) return null
    else return entities[id]
  }
)

export const getClientByField = createSelector(
  getAllClients,
  (entities) => (field: string, value: string) => {
    return entities.filter(entity => entity[field] === value)
  }
)
