import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'
import { Client } from '../../../../entity/client.entity'
import { createClient } from '../../../../presentation/client/client.actions'
import { getClientsLoading } from '../../../../presentation/client/client.selectors'



@Component({
  selector: 'client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {

  loading$: Observable<boolean>
  form: FormGroup

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getClientsLoading))
    this.clearForm()
  }

  clearForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
    })
  }

  validate() {
    if (this.form.valid) this.uploadClient()
    else validateFields(this.form)
  }

  uploadClient() {
    let client: Client = {
      id: '',
      created: new Date(),
      updated: new Date(),
      name: this.form.controls['name'].value,
      surname: this.form.controls['surname'].value,
    }

    this.store.dispatch(createClient({ client: client }))
  }
}
