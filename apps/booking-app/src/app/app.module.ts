import { AppComponent } from './app.component';
import { BookingLayoutComponent } from './booking-layout/booking-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../../../libs/ui/src/lib/ui.module';

@NgModule({
  declarations: [AppComponent,BookingLayoutComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
