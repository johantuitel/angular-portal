import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'oceanic-airlines-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightDetailsComponent {

}
