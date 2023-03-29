import { ClientCheckinLayoutComponent } from './client-checkin-layout/client-checkin-layout-component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  imports: [CommonModule, UiModule,
      RouterModule.forChild([
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'check-in-info',
        },
        {
          path: 'check-in-info',
          component: ClientCheckinLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/features/feature-check-in-info').then((module) => module.FeatureCheckInInfoModule),
        },
        {
          path: 'ticket-finder',
          component: ClientCheckinLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/features/feature-ticket-finder').then((module) => module.FeatureTicketFinderModule),
        },
    ]),
  ],
  declarations: [
    ClientCheckinLayoutComponent
  ],
})
export class ShellClientCheckinModule {}
