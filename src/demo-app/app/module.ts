import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { DxDataGridModule } from 'devextreme-angular';

import {
  IgoModule,
  provideConfigOptions,
} from 'igo2';

import {
  CauseModule,
  provideConfig,
} from '../../lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),

    FormsModule,
    HttpModule,
    MaterialModule,
    DxDataGridModule,
    IgoModule.forRoot(),
    CauseModule.forRoot(),
  ],
  providers: [
    provideConfigOptions({
      default: environment.igo,
      // path: './assets/config-igo.json'
    }),
    provideConfig({
      default: environment.cause,
      // path: 'assets/config.json'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
