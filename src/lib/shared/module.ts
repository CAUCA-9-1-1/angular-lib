import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { MaterialModule, GestureConfig } from '@angular/material';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import 'hammerjs/hammer';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WindowRefService } from './services/window-ref.service';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/cause/locale/', '.json');
}

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
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
