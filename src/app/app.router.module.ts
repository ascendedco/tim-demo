import { NgModule } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { routesDesktop, routesMobile } from './app.routes'
import { Observable } from 'rxjs'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators'

@NgModule({
  imports: [
    RouterModule.forRoot(routesDesktop)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRouterModule {

  // Angular CDK Observable that provides info about the device's resolution
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      distinctUntilChanged(),
      shareReplay()
    )

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    // Subscribe to layout changes to choose correct routes
    this.isHandset$.subscribe(async isHandset => {
      // Reset routing config based on handset observable
      if (isHandset) this.router.resetConfig(routesMobile)
      else this.router.resetConfig(routesDesktop)

      // Reload current route so config can take effect
      let url = this.router.url
      await this.router.navigateByUrl('/', { skipLocationChange: true })
      await this.router.navigateByUrl(url)
    })
  }
}
