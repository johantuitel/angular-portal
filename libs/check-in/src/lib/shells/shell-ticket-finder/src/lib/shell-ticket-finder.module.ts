import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () =>
        import('@oceanic-airlines/check-in/src/lib/features/feature-ticket-finder').then((module) => module.FeatureTicketFinderModule),
    }
  ]),
],
})
export class ShellTicketFinderModule {}
