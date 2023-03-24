import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CheckinRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckinRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
