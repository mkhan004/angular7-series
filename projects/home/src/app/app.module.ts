import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// library
import { Ng7CommonModule } from '@ng7/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng8MaterialModule } from '@ng8/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7CommonModule,
    Ng8MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
