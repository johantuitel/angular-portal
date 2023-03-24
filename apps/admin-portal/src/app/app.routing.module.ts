import { AdminPortalLayoutComponent } from './admin-portal-layout/admin-portal-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../../../libs/ui/src/lib/ui.module';

@NgModule({
    declarations: [AdminPortalLayoutComponent],
    imports: [ UiModule,
      RouterModule.forRoot(
        [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'admin-portal',
            },
            {
                path: 'admin-portal',
                component: AdminPortalLayoutComponent,
                loadChildren: () =>
                    import('@oceanic-airlines/adminportal/src/lib/shells/shell-admin').then(
                        module => module.ShellAdminModule,
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
export class AdminPortalRoutingModule {}
