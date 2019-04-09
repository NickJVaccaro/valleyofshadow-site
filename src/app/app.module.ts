import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Google Analytics
import { Angulartics2RouterlessModule } from 'angulartics2/routerlessmodule';
import { Angulartics2Module } from 'angulartics2';

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
    HttpClientJsonpModule,
    Angulartics2RouterlessModule.forRoot(),
    Angulartics2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
