import { BookingLayoutComponent } from './booking-layout/booking-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@oceanic-airlines/ui';

@NgModule({
  declarations: [BookingLayoutComponent],
    imports: [ UiModule,
      RouterModule.forRoot(
        [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'booking',
            },
            {
                path: 'booking',
                component: BookingLayoutComponent,
                loadChildren: () =>
                    import('@oceanic-airlines/booking/src/lib/shells/shell-booking').then(
                        module => module.ShellBookingModule,
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
export class BookingRoutingModule {}
