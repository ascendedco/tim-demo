import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

import { OrderNetwork } from '../../domain/gateways/network/order.network'
import { FirebaseNetworkGateway } from '@ascendedco/architecture'
import { Order } from '../../entity/order.entity'

@Injectable()
export class FirebaseOrderNetwork extends FirebaseNetworkGateway<Order> implements OrderNetwork {

  constructor(firestore: AngularFirestore) {
    // TODO: Replace order with the correct path
    super(firestore, 'orders')
  }
  
}

