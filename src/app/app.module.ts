import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  BREAKPOINT_OBSERVER_TOKEN,
  isTabletFactory,
} from './common/breakpoint-observer';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers   : [{
    provide   : BREAKPOINT_OBSERVER_TOKEN,
    useFactory: isTabletFactory,
    deps      : [BreakpointObserver]
  }],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
