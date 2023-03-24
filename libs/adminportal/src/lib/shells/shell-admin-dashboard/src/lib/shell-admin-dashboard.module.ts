import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@oceanic-airlines/adminportal/src/lib/features/feature-admin-dashboard').then((module) => module.FeatureAdminDashboardModule),
      }
    ]),
  ],
})
export class ShellAdminDashboardModule {}
