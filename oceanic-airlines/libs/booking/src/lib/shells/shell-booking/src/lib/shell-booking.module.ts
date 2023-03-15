import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'passenger-info',
      },
      {
        path: 'passenger-info',
        loadChildren: () =>
          import('@oceanic-airlines/booking/src/lib/shells/shell-passenger-info').then((module) => module.ShellPassengerInfoModule),
      },
      {
        path: 'seat-listing',
        loadChildren: () =>
          import('@oceanic-airlines/booking/src/lib/shells/shell-seat-listing').then((module) => module.ShellSeatListingModule),
      },
    ]),
  ],
})
export class ShellBookingModule {}
