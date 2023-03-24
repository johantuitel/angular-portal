import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@oceanic-airlines/shared';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  imports: [CommonModule, UiModule, SharedModule,
    RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: FlightDetailsComponent,
    },
  ]),
  ],
  declarations: [
    FlightDetailsComponent
  ],
})
export class FeatureFlightDetailsModule {}
