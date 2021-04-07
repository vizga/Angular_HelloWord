import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatetrialModule } from './matetrial/matetrial.module';
// import { Screen1Component } from './Screens/screen1/screen1.component';

@NgModule({
  declarations: [
    AppComponent,
    // Screen1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatetrialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
