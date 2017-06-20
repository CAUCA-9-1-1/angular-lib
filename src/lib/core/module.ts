import { NgModule, ModuleWithProviders } from '@angular/core';
import { RequestOptions, XHRBackend } from '@angular/http';
import { loadMessages } from 'devextreme/localization';

import {} from '../core/extends/string';
import { ConfigService, provideConfig, provideConfigLoader } from './config';
import { HttpService } from './http';
import { AuthorizeRequestOptions } from './http/authorize-request-options';
import { CauseSharedModule } from '../shared/module';
import { RequestLoaderService } from './request-loader/request-loader.service';
import { RequestLoaderComponent } from './request-loader/request-loader.component';

import { FR } from './extends/devextreme-fr';

loadMessages(FR);

export function httpServiceFactory(
  backend: XHRBackend,
  options: AuthorizeRequestOptions,
  loaderService: RequestLoaderService,
  configService: ConfigService
) {
  return new HttpService(backend, options, configService, loaderService);
}

@NgModule({
  declarations: [
    RequestLoaderComponent,
  ],
  exports: [
    RequestLoaderComponent,
  ],
  imports: [
    CauseSharedModule
  ],
  providers: [
    ConfigService,
    HttpService,
    RequestLoaderService,
  ]
})
export class CauseCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CauseCoreModule,
      providers: [
        HttpService,
        provideConfig({}),
        provideConfigLoader(),
        {
          provide: HttpService,
          useFactory: httpServiceFactory,
          deps: [XHRBackend, RequestOptions, RequestLoaderService, ConfigService]
        },
      ]
    };
  }
}
