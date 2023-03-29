import { ChangeDetectionStrategy, Component } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ILink } from '../../../../../../../../ui/src/lib/components/atoms/link/link';
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
    {label: 'Check-in Info', value: 'admin-portal/checkin/check-in-info'},
    {label: 'Ticket Finder', value: 'admin-portal/checkin/ticket-finder'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
