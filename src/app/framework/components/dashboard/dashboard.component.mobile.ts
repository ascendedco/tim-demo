import { Component } from '@angular/core'
import { DashboardComponent } from './dashboard.component'

@Component({
  selector: 'app-dashboard-mobile',
  templateUrl: './dashboard.component.mobile.html',
  styleUrls: ['./dashboard.component.mobile.scss']
})
export class DashboardComponentMobile extends DashboardComponent {

  constructor() {
    super()
  }

}
