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
          import('@oceanic-airlines/clientportal/src/lib/features/feature-client-dashboard').then((module) => module.FeatureClientDashboardModule),
      }
    ]),
  ],
})
export class ShellClientDashboardModule {}
