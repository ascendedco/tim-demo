import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

import { ClientNetwork } from '../../domain/gateways/network/client.network'
import { FirebaseNetworkGateway } from '@ascendedco/architecture'
import { Client } from '../../entity/client.entity'

@Injectable()
export class FirebaseClientNetwork extends FirebaseNetworkGateway<Client> implements ClientNetwork {

  constructor(firestore: AngularFirestore) {
    // TODO: Replace client with the correct path
    super(firestore, 'clients')
  }
  
}

