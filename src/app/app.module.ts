import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponentComponent } from './auth-button-component/auth-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientModule,

    AuthModule.forRoot({
      domain: 'dev-6texbb02.us.auth0.com',
      clientId: 'GvftYXetnuWJlYPKQLPje4ZzBFMjEB7r'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
