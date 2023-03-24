import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientportalSrcLibShellsShellClientDashboardRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(clientportalSrcLibShellsShellClientDashboardRoutes),
  ],
})
export class ClientportalSrcLibShellsShellClientDashboardModule {}
