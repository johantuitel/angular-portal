import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '@oceanic-airlines/ui';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-check-in-layout',
  templateUrl: './check-in-layout.component.html',
  styleUrls: ['./check-in-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckInLayoutComponent {

  checkinPages: Immutable<Array<ILink>> = [
    {label: 'Check-in Info', value: 'check-in/check-in-info'},
    {label: 'Ticket Finder', value: 'check-in/ticket-finder'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
