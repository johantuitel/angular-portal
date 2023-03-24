import { FlightTrackingLayoutComponent } from './flight-tracking-layout/flight-tracking-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  declarations: [FlightTrackingLayoutComponent],
    imports: [ UiModule,
      RouterModule.forRoot(
        [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'flight-tracking',
            },
            {
                path: 'flight-tracking',
                component: FlightTrackingLayoutComponent,
                loadChildren: () =>
                    import('@oceanic-airlines/flight-tracking/src/lib/shells/shell-flight-tracking').then(
                        module => module.ShellFlightTrackingModule,
                    ),
            },
        ],
        {
            paramsInheritanceStrategy: 'always',
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 0],
            anchorScrolling: 'enabled',
        },
    ),
    ],
    exports: [RouterModule],
})
export class FlightTrackingRoutingModule {}
