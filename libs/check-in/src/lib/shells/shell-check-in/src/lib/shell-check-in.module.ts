import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
        RouterModule.forChild([
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'check-in-info',
        },
        {
          path: 'check-in-info',
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/shells/shell-check-in-info').then((module) => module.ShellCheckInInfoModule),
        },
        {
          path: 'ticket-finder',
          loadChildren: () =>
            import('@oceanic-airlines/check-in/src/lib/shells/shell-ticket-finder').then((module) => module.ShellTicketFinderModule),
        },
      ])
    ],
})
export class ShellCheckInModule {}
