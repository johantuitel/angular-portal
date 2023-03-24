import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '../../../../../libs/ui/src/lib/components/atoms/link/link';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-booking-layout',
  templateUrl: './booking-layout.component.html',
  styleUrls: ['./booking-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingLayoutComponent {

  bookingPages: Immutable<Array<ILink>> = [
    {label: 'Passenger Info', value: 'booking/passenger-info'},
    {label: 'Seat Listing', value: 'booking/seat-listing'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
