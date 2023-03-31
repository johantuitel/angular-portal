import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '@oceanic-airlines/ui';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-admin-booking-layout',
  templateUrl: './admin-booking-layout-component.html',
  styleUrls: ['./admin-booking-layout-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBookingLayoutComponent {

  bookingPages: Immutable<Array<ILink>> = [
    {label: 'Passenger Info', value: 'admin-portal/booking/passenger-info'},
    {label: 'Seat Listing', value: 'admin-portal/booking/seat-listing'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
