import { AdminBookingLayoutComponent } from './admin-booking-layout/admin-booking-layout-component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../../../../../../ui/src/lib/ui.module';

@NgModule({
  imports: [CommonModule, UiModule,
      RouterModule.forChild([
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'passenger-info',
        },
        {
          path: 'passenger-info',
          component: AdminBookingLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/booking/src/lib/features/feature-passenger-info').then((module) => module.FeaturePassengerInfoModule),
        },
        {
          path: 'seat-listing',
          component: AdminBookingLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/booking/src/lib/features/feature-seat-listing').then((module) => module.FeatureSeatListingModule),
        },
    ]),
  ],
  declarations: [
    AdminBookingLayoutComponent
  ],
})
export class ShellAdminBookingModule {}
