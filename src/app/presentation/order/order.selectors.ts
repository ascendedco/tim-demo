import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllOrders, selectOrderEntities, State } from './order.reducer'
import { getParams } from '../router/router.selectors'

export const getOrderFeature = createFeatureSelector<State>('order')
export const getAllOrders = createSelector(getOrderFeature, selectAllOrders)
export const getOrderEntities = createSelector(getOrderFeature, selectOrderEntities)
export const getOrdersLoaded = createSelector(getOrderFeature, (state) => state.loaded)
export const getOrdersLoading = createSelector(getOrderFeature, (state) => state.loading)

export const getCurrentOrder = createSelector(
  getParams,
  getOrderEntities,
  (params, entities) => {
    if (entities[params.id] === undefined) return null
    else return entities[params.id]
  }
)

export const getOrderById = createSelector(
  getOrderEntities,
  (entities) => (id: string) => {
    if (entities[id] === undefined) return null
    else return entities[id]
  }
)

export const getOrderByField = createSelector(
  getAllOrders,
  (entities) => (field: string, value: string) => {
    return entities.filter(entity => entity[field] === value)
  }
)
