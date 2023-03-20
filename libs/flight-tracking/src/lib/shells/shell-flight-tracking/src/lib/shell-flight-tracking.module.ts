import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
        RouterModule.forChild([
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'flight-search',
        },
        {
          path: 'flight-search',
          loadChildren: () =>
            import('@oceanic-airlines/flight-tracking/src/lib/shells/shell-flight-search').then((module) => module.ShellFlightSearchModule),
        },
        {
          path: 'seat-listing',
          loadChildren: () =>
            import('@oceanic-airlines/flight-tracking/src/lib/shells/shell-flight-details').then((module) => module.ShellFlightDetailsModule),
        },
      ])
    ],
})
export class ShellFlightTrackingModule {}
