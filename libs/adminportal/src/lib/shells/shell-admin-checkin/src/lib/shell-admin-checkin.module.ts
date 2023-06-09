import { AdminCheckinLayoutComponent } from './admin-checkin-layout/admin-checkin-layout-component';
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
          component: AdminCheckinLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/features/feature-check-in-info').then((module) => module.FeatureCheckInInfoModule),
        },
        {
          path: 'ticket-finder',
          component: AdminCheckinLayoutComponent,
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/features/feature-ticket-finder').then((module) => module.FeatureTicketFinderModule),
        },
    ]),
  ],
  declarations: [
    AdminCheckinLayoutComponent
  ],
})
export class ShellAdminCheckinModule {}
