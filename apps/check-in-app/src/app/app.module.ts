import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CheckInLayoutComponent } from './check-in-layout/check-in-layout.component';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../../../libs/ui/src/lib/ui.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CheckInLayoutComponent],
  imports: [BrowserModule, UiModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
