import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@oceanic-airlines/clientportal/src/lib/shells/shell-client-dashboard').then((module) => module.ShellClientDashboardModule),
      },
      {
        path: 'flight-tracking',
        loadChildren: () =>
          import('@oceanic-airlines/clientportal/src/lib/shells/shell-client-flight-tracking').then((module) => module.ShellClientFlightTrackingModule),
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('@oceanic-airlines/clientportal/src/lib/shells/shell-client-checkin').then((module) => module.ShellClientCheckinModule),
      },
    ]),
  ],
})
export class ShellClientModule {}
