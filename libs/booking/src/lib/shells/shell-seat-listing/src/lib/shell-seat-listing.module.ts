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
        import('@oceanic-airlines/booking/src/lib/features/feature-seat-listing').then((module) => module.FeatureSeatListingModule),
    }
  ]),
],
})
export class ShellSeatListingModule {}
