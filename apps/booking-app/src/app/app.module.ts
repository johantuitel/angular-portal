import { AppComponent } from './app.component';
import { BookingRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, BookingRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
