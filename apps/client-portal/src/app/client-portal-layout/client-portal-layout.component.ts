import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '../../../../../libs/ui/src/lib/components/atoms/link/link';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-client-portal-layout',
  templateUrl: './client-portal-layout.component.html',
  styleUrls: ['./client-portal-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPortalLayoutComponent {

  adminPages: Immutable<Array<ILink>> = [
    {label: 'Dashboard', value: 'client-portal/dashboard'},
    {label: 'Flight-tracking', value: 'client-portal/flight-tracking'},
    {label: 'Check-in', value: 'client-portal/check-in'},
  ]

  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
