import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
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
        component: FlightSearchComponent,
    },
  ]),
  ],
  declarations: [
    FlightSearchComponent
  ],
})
export class FeatureFlightSearchModule {}
