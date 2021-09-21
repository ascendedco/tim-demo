import { Routes } from '@angular/router'
import { DashboardComponentDesktop } from './framework/components/dashboard/dashboard.component.desktop'
import { DashboardComponentMobile } from './framework/components/dashboard/dashboard.component.mobile'

export const routesDesktop: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponentDesktop,
    children: [

    ]
  }
]

export const routesMobile: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponentMobile,
    children: [

    ]
  }
]
