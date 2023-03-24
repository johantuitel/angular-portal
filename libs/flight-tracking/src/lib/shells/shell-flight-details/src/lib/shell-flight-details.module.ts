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
        import('@oceanic-airlines/flight-tracking/src/lib/features/feature-flight-details').then((module) => module.FeatureFlightDetailsModule),
    }
  ]),
],
})
export class ShellFlightDetailsModule {}
