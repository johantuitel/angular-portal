import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClientPortalRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientPortalRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
