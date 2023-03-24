import { CheckInInfoComponent } from './check-in-info/check-in-info.component';
import { CommonModule } from '@angular/common';
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
        component: CheckInInfoComponent,
    },
  ]),
  ],
  declarations: [
    CheckInInfoComponent
  ],
})
export class FeatureCheckInInfoModule {}
