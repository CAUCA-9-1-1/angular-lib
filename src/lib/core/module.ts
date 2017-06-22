import { NgModule, ModuleWithProviders } from '@angular/core';
import { RequestOptions, XHRBackend } from '@angular/http';

import './extends/string';
import './extends/devextreme-fr';
import { ConfigService, provideConfig, provideConfigLoader } from './config';
import { HttpService } from './http';
import { AuthorizeRequestOptions } from './http/authorize-request-options';
import { RequestLoaderService } from './request-loader/request-loader.service';
import { RequestLoaderComponent } from './request-loader/request-loader.component';
import { CauseSharedModule } from '../shared/module';

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
