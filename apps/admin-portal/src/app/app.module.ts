import { AdminPortalRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminPortalRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
