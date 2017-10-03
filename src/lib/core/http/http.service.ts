import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {
  RequestOptionsArgs,
  Response,
  Headers,
  XHRBackend
} from '@angular/http';

import {AuthService} from './auth.service';
import {AuthorizeRequestOptions} from './authorize-request-options';
import {ConfigService} from '../config/config.service';
import {RequestLoaderService} from '../request-loader/request-loader.service';

@Injectable()
export class HttpService extends AuthService {
  private static count = 0;

  constructor(
    backend: XHRBackend,
    defaultOptions: AuthorizeRequestOptions,
    configService: ConfigService,
    private loaderService: RequestLoaderService,
  ) {
    super(backend, defaultOptions, configService);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.showLoader();

    return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });
  }

  put(url: string, body?: any, options?: RequestOptionsArgs): Observable<any> {
    this.showLoader();

    return super.put(this.getFullUrl(url), body, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });
  }

  post(url: string, body?: any, options?: RequestOptionsArgs): Observable<any> {
    this.showLoader();

    return super.post(this.getFullUrl(url), body, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.showLoader();

    return super.delete(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });
  }

  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new AuthorizeRequestOptions();
    }

    if (options.headers == null) {
      options.headers = new Headers();
    }

    return options;
  }

  private getFullUrl(url: string): string {
    if (!this.apiUrl) {
      throw new Error('You need to set "apiUrl" inside your "cause" configuration.');
    }

    return this.apiUrl + url;
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(result: Response): void {
    if (result instanceof Response) {
      // Actually, we don't enable any general validation
    }
  }

  private onError(error: Response | any): void {
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);

      if (error.status === 400) {
        // We let the application handle this error
      } else if (error.status === 401) {
        this.checkLogin();
      } else {
        throw new Error(error.status + ' - ' + (error.statusText || '') + ' ' + err);
      }
    } else {
      throw new Error(error.message ? error.message : error.toString());
    }
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    HttpService.count++;

    if (HttpService.count) {
      this.loaderService.show();
    }
  }

  private hideLoader(): void {
    HttpService.count--;

    if (!HttpService.count) {
      this.loaderService.hide();
    }
  }
}
