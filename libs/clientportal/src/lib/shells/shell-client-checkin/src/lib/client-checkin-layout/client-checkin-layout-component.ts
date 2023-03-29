import { ChangeDetectionStrategy, Component } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ILink } from '../../../../../../../../ui/src/lib/components/atoms/link/link';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-client-checkin-layout',
  templateUrl: './client-checkin-layout-component.html',
  styleUrls: ['./client-checkin-layout-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCheckinLayoutComponent {

  bookingPages: Immutable<Array<ILink>> = [
    {label: 'Check-in Info', value: 'client-portal/checkin/check-in-info'},
    {label: 'Ticket Finder', value: 'client-portal/checkin/ticket-finder'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
