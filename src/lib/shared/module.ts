import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, GestureConfig } from '@angular/material';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import 'hammerjs/hammer';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WindowRefService } from './services/window-ref.service';
import { PinchZoomDirective } from './directives/pinch-zoom.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/cause/locale/', '.json');
}

@NgModule({
  declarations: [
    PinchZoomDirective,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    PinchZoomDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    WindowRefService,
  ]
})
export class CauseSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CauseSharedModule,
      providers: [
        // Need this provider to support touch gestures. Used by the slider.
        { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
      ]
    };
  }
}
