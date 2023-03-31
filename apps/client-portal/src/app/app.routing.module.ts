import { ClientPortalLayoutComponent } from './client-portal-layout/client-portal-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  declarations: [ClientPortalLayoutComponent],
  imports: [ UiModule,
      RouterModule.forRoot(
        [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'client-portal',
          },
          {
              path: 'client-portal',
              component: ClientPortalLayoutComponent,
              loadChildren: () =>
                  import('@oceanic-airlines/clientportal/src/lib/shells/shell-client').then(
                      module => module.ShellClientModule,
                  ),
          },
      ],
        {
            paramsInheritanceStrategy: 'always',
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 0],
            anchorScrolling: 'enabled',
        },
    ),
    ],
    exports: [RouterModule],
})
export class ClientPortalRoutingModule {}
