import { Routes } from '@angular/router'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'
import {OrderViewComponent} from './framework/components/order/order-view/order-view.component';
import {OrderCreateComponent} from './framework/components/order/order-create/order-create.component';
import {OrderEditComponent} from './framework/components/order/order-edit/order-edit.component';
import {ClientViewComponent} from './framework/components/client/client-view/client-view.component';
import {ClientCreateComponent} from './framework/components/client/client-create/client-create.component';
import {ClientEditComponent} from './framework/components/client/client-edit/client-edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'orders',
        component: OrderViewComponent
      },
      {
        path: 'orders/new',
        component: OrderCreateComponent
      },
      {
        path: 'orders/:id',
        component: OrderEditComponent
      },
      {
        path: 'clients',
        component: ClientViewComponent
      },
      {
        path: 'clients/new',
        component: ClientCreateComponent
      },
      {
        path: 'clients/:id',
        component: ClientEditComponent
      }
      /*{
        path: 'users',
        component: UserViewComponent
      },
      {
        path: 'users/new',
        component: UserCreateComponent
      },
      {
        path: 'users/:id',
        component: UserEditComponent
      },*/
    ]
  }
]
