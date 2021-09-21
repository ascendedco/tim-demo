import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {State} from '../../../presentation';
import {loadClients} from '../../../presentation/client/client.actions';
import {loadOrders} from '../../../presentation/order/order.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadClients())
    this.store.dispatch(loadOrders())
  }
}
