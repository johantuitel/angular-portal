import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ILink } from '../../../../../libs/ui/src/lib/components/atoms/link/link';
import { Immutable } from '@oceanic-airlines/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'oceanic-airlines-flight-tracking-layout',
  templateUrl: './flight-tracking-layout.component.html',
  styleUrls: ['./flight-tracking-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightTrackingLayoutComponent {
  flightTrackingPages: Immutable<Array<ILink>> = [
    {label: 'Flight Details', value: 'flight-tracking/flight-details'},
    {label: 'Flight Search', value: 'flight-tracking/flight-search'}
  ]
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
