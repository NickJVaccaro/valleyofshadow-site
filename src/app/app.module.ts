import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home';
import { PressComponent } from './pages/press';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Google Analytics
import { Angulartics2RouterlessModule } from 'angulartics2/routerlessmodule';
import { Angulartics2Module } from 'angulartics2';

import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { PillarsComponent } from './pillars/pillars.component';
import { NavComponent } from './nav/nav.component';
import { CreditsComponent } from './pages/credits';

@NgModule({
  declarations: [
    AppComponent,
    ScreenshotsComponent,
    PillarsComponent,
    NavComponent,
    HomeComponent,
    PressComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
