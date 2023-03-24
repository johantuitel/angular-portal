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
          import('@oceanic-airlines/adminportal/src/lib/shells/shell-admin-dashboard').then((module) => module.ShellAdminDashboardModule),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('@oceanic-airlines/adminportal/src/lib/shells/shell-admin-booking').then((module) => module.ShellAdminBookingModule),
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('@oceanic-airlines/adminportal/src/lib/shells/shell-admin-checkin').then((module) => module.ShellAdminCheckinModule),
      },
    ]),
  ],
})
export class ShellAdminModule {}
