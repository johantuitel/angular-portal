import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@oceanic-airlines/shared';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  imports: [CommonModule, UiModule, SharedModule,
    RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: PassengerInfoComponent,
    },
  ]),
  ],
  declarations: [
    PassengerInfoComponent
  ],
})
export class FeaturePassengerInfoModule {}
