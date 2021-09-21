import { Component } from '@angular/core'
import { DashboardComponent } from './dashboard.component'

@Component({
  selector: 'app-dashboard-desktop',
  templateUrl: './dashboard.component.desktop.html',
  styleUrls: ['./dashboard.component.desktop.scss']
})
export class DashboardComponentDesktop extends DashboardComponent {

  constructor() {
    super()
  }

}
