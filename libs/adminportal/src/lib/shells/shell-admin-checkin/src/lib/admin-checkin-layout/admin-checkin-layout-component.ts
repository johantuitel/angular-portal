import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '@oceanic-airlines/ui';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-admin-checkin-layout',
  templateUrl: './admin-checkin-layout-component.html',
  styleUrls: ['./admin-checkin-layout-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCheckinLayoutComponent {

  bookingPages: Immutable<Array<ILink>> = [
    {label: 'Check-in Info', value: 'admin-portal/check-in/check-in-info'},
    {label: 'Ticket Finder', value: 'admin-portal/check-in/ticket-finder'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
