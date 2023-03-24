import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeatListingComponent } from './seat-listing/seat-listing.component';
import { SharedModule } from '@oceanic-airlines/shared';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  imports: [CommonModule, UiModule, SharedModule,
    RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: SeatListingComponent,
    },
  ]),
  ],
  declarations: [
    SeatListingComponent
  ],
})
export class FeatureSeatListingModule {}
