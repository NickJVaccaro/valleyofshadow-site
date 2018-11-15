import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { PillarsComponent } from './pillars/pillars.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenshotsComponent,
    PillarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
