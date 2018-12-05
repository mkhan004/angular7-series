import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// library
import { Ng7CommonModule } from '@ng7/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
