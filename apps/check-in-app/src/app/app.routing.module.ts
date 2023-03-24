import { CheckInLayoutComponent } from './check-in-layout/check-in-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  declarations: [CheckInLayoutComponent],
    imports: [ UiModule,
      RouterModule.forRoot(
        [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'check-in',
            },
            {
                path: 'check-in',
                component: CheckInLayoutComponent,
                loadChildren: () =>
                    import('@oceanic-airlines/check-in/src/lib/shells/shell-check-in').then(
                        module => module.ShellCheckInModule,
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
export class CheckinRoutingModule {}
