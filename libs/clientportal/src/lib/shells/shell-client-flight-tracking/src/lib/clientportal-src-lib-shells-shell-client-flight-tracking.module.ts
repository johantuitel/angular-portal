import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientportalSrcLibShellsShellClientFlightTrackingRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(
      clientportalSrcLibShellsShellClientFlightTrackingRoutes
    ),
  ],
})
export class ClientportalSrcLibShellsShellClientFlightTrackingModule {}
