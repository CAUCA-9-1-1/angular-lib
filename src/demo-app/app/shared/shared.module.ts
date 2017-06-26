import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../../environments/environment';

import {
  IgoModule,
  provideConfigOptions,
} from 'igo2';

import {
  CauseModule,
  provideConfig,
} from '../../../lib';

@NgModule({
  declarations: [],
  entryComponents: [],
  exports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    IgoModule,
    CauseModule,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
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
  ]
})
export class SharedModule { }
