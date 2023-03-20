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
      loadChildren: () =>
        import('@oceanic-airlines/check-in/src/lib/features/feature-check-in-info').then((module) => module.FeatureCheckInInfoModule),
    }
  ]),
],
})
export class ShellCheckInInfoModule {}
