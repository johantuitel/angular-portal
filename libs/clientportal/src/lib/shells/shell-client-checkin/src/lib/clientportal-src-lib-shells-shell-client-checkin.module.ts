import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientportalSrcLibShellsShellClientCheckinRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(clientportalSrcLibShellsShellClientCheckinRoutes),
  ],
})
export class ClientportalSrcLibShellsShellClientCheckinModule {}
