import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'

import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'
import { Client } from '../../../../entity/client.entity'
import { updateClient } from '../../../../presentation/client/client.actions'
import { getCurrentClient, getClientsLoading } from '../../../../presentation/client/client.selectors'



@Component({
  selector: 'client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  loading$: Observable<boolean>
  client$: Observable<Client>
  form: FormGroup

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.clearForm()
    this.client$ = this.store.pipe(select(getCurrentClient), tap(client => this.updateForm(client)))
    this.loading$ = this.store.pipe(select(getClientsLoading))
  }

  clearForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
    })
  }

  updateForm(client: Client) {
    if (client !== null) this.form.patchValue({
      // name: client.name,
      name: client.name,
      surname: client.surname,
    })
  }

  validate(client: Client) {
    if (this.form.valid) this.uploadClient(client)
    else validateFields(this.form)
  }

  uploadClient(client: Client) {
    let updated: Client = {
      ...client,
      name: this.form.controls['name'].value,
      surname: this.form.controls['surname'].value,
    }

    this.store.dispatch(updateClient({ client: updated }))
  }
}
