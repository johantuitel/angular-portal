import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlightTrackingRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlightTrackingRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
