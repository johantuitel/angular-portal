import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'passenger-info',
      },
      {
        path: 'passenger-info',
        pathMatch: 'full',
        loadChildren: () =>
          import('@oceanic-airlines/booking/src/lib/features/feature-passenger-info').then((module) => module.FeaturePassengerInfoModule),
      }
    ]),
  ],
})
export class ShellPassengerInfoModule {}
