import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRouterModule } from './app.router.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { effects, reducers } from './presentation'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { RouterSerializer } from './presentation/router/router.selectors'
import { MatTableModule } from '@angular/material/table';
import { FirebaseOrderNetwork } from './network/firebase/firebase.order.network';
import { OrderNetwork } from './domain/gateways/network/order.network';
import { OrderCreateComponent } from './framework/components/order/order-create/order-create.component';
import { OrderEditComponent } from './framework/components/order/order-edit/order-edit.component';
import { OrderViewComponent } from './framework/components/order/order-view/order-view.component';
import { FirebaseClientNetwork } from './network/firebase/firebase.client.network';
import { ClientNetwork } from './domain/gateways/network/client.network';
import { ClientCreateComponent } from './framework/components/client/client-create/client-create.component';
import { ClientEditComponent } from './framework/components/client/client-edit/client-edit.component';
import { ClientViewComponent } from './framework/components/client/client-view/client-view.component'
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderCreateComponent,
    OrderEditComponent,
    OrderViewComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ClientViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,

    // Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    // NgRx Modules
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ serializer: RouterSerializer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [

  { provide: OrderNetwork, useClass: FirebaseOrderNetwork },

  { provide: ClientNetwork, useClass: FirebaseClientNetwork }],
  bootstrap: [AppComponent],
})
export class AppModule {}
