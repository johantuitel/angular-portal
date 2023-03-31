import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '@oceanic-airlines/ui';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-admin-portal-layout',
  templateUrl: './admin-portal-layout.component.html',
  styleUrls: ['./admin-portal-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPortalLayoutComponent {

  adminPages: Immutable<Array<ILink>> = [
    {label: 'Dashboard', value: 'admin-portal/dashboard'},
    {label: 'Booking', value: 'admin-portal/booking'},
    {label: 'Check-in', value: 'admin-portal/check-in'},
  ]

  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
