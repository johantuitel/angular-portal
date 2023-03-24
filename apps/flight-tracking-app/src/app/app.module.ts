import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlightTrackingLayoutComponent } from './flight-tracking-layout/flight-tracking-layout.component';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../../../libs/ui/src/lib/ui.module';

@NgModule({
  declarations: [AppComponent, FlightTrackingLayoutComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiModule,
    RouterModule.forRoot(
      [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'flight-tracking',
          },
          {
              path: 'flight-tracking',
              component: FlightTrackingLayoutComponent,
              loadChildren: () =>
                  import('@oceanic-airlines/flight-tracking/src/lib/shells/shell-flight-tracking').then(
                      module => module.ShellFlightTrackingModule,
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
