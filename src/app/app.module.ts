import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {VaccineComponent} from './vaccine/vaccine.component';
import {VaccineDetailComponent} from './vaccine-detail/vaccine-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SideEffectComponent } from './side-effect/side-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineComponent,
    VaccineDetailComponent,
    SideEffectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
