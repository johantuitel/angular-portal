import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@oceanic-airlines/shared';
import { TicketFinderComponent } from './ticket-finder/ticket-finder.component';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  imports: [CommonModule, UiModule, SharedModule,
    RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: TicketFinderComponent,
    },
  ]),
  ],
  declarations: [
    TicketFinderComponent
  ],
})
export class FeatureTicketFinderModule {}
