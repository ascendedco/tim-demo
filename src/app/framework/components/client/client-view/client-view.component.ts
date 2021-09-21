import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { Client } from '../../../../entity/client.entity'
import { getAllClients, getClientsLoading } from '../../../../presentation/client/client.selectors'
import { deleteClient } from '../../../../presentation/client/client.actions'
import { State } from '../../../../presentation'

@Component({
  selector: 'client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {

  /* TODO: Add / configure required table fields */
  displayedColumns: string[] = ['name','surname', 'actions']
  loading$: Observable<boolean>
  client$: Observable<Client[]>

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getClientsLoading))
    this.client$ = this.store.pipe(select(getAllClients))
  }

  delete(client: Client) {
    // Todo: show modal that prompts for delete
    this.store.dispatch(deleteClient({ client: client }))
  }
}
