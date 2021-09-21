import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { ClientNetwork } from '../../domain/gateways/network/client.network'
import * as ClientActions from './client.actions'
import { Client } from '../../entity/client.entity'

@Injectable()
export class ClientEffects {

  constructor(private actions$: Actions, private network: ClientNetwork) {}

  @Effect()
  loadClient$ = this.actions$.pipe(
    ofType(ClientActions.loadClient),
    switchMap((action) => this.network.read(action.id).pipe(
      map((client: Client) => ClientActions.upsertClient({ client: client })),
      catchError(error => {
        return of({
          type: '[Error] Load Clients',
          payload: error
        })
      })
    ))
  )

  @Effect()
  loadClients$ = this.actions$.pipe(
    ofType(ClientActions.loadClients),
    switchMap((action) => this.network.readList().pipe(
      map((clients: Client[]) => ClientActions.upsertClients({ clients: clients })),
      catchError(error => {
        return of({
          type: '[Error] Load Clients',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createClient$ = this.actions$.pipe(
    ofType(ClientActions.createClient),
    switchMap((action) => this.network.create(action.client).pipe(
      map((client: Client) => ClientActions.upsertClient({ client: client })),
      catchError(error => {
        return of({
          type: '[Error] Create Client',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createClients$ = this.actions$.pipe(
    ofType(ClientActions.createClients),
    switchMap((action) => this.network.createList(action.clients).pipe(
      map((clients: Client[]) => ClientActions.upsertClients({ clients: clients })),
      catchError(error => {
        return of({
          type: '[Error] Create Clients',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateClient$ = this.actions$.pipe(
    ofType(ClientActions.updateClient),
    switchMap((action) => this.network.update(action.client).pipe(
      map((client: Client) => ClientActions.upsertClient({ client: client })),
      catchError(error => {
        return of({
          type: '[Error] Update Client',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateClients$ = this.actions$.pipe(
    ofType(ClientActions.updateClients),
    switchMap((action) => this.network.updateList(action.clients).pipe(
      map((clients: Client[]) => ClientActions.upsertClients({ clients: clients })),
      catchError(error => {
        return of({
          type: '[Error] Update Clients',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteClient$ = this.actions$.pipe(
    ofType(ClientActions.deleteClient),
    switchMap((action) => this.network.delete(action.client).pipe(
      map((client: Client) => ClientActions.removeClient({ id: client.id })),
      catchError(error => {
        return of({
          type: '[Error] Delete Client',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteClients$ = this.actions$.pipe(
    ofType(ClientActions.deleteClients),
    switchMap((action) => this.network.deleteList(action.clients).pipe(
      map((clients: Client[]) => ClientActions.removeClients({ ids: clients.map(client => client.id) })),
      catchError(error => {
        return of({
          type: '[Error] Delete Clients',
          payload: error
        })
      })
    ))
  )
}
