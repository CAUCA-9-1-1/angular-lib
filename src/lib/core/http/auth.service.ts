import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {
  Http,
  Response,
  Headers,
  XHRBackend, RequestOptions
} from '@angular/http';

import {AuthorizeRequestOptions} from './authorize-request-options';
import {WindowRefService} from '../../shared/services/window-ref.service';
import {ConfigService} from '../config/config.service';

@Injectable()
export class AuthService extends Http {
  private static isInLoginProcess = false;
  private storage: any;
  private location: any;
  private windowRef = new WindowRefService();
  protected apiUrl = '';

  constructor(
    backend: XHRBackend,
    defaultOptions: AuthorizeRequestOptions,
    config: ConfigService
  ) {
    super(backend, defaultOptions);

    this.apiUrl = config.getConfig('apiUrl');
    this.storage = this.windowRef.nativeObject('localStorage');
    this.location = this.windowRef.nativeObject('location');
  }

  protected checkLogin(body: any) {
    if (body.error && body.login === false) {
      if (!AuthService.isInLoginProcess) {
        AuthService.isInLoginProcess = true;

        this.login().subscribe((infoToken) => {
          AuthService.isInLoginProcess = false;

          if (infoToken.data.accessToken) {
            this.storage.setItem('currentToken', infoToken.data.accessToken);
            this.reload();
          } else {
            throw new Error('need to login');
          }
        });
      }
    }
  }

  private reload() {
    this.location.reload();
  }

  private login() {
    this.storage.removeItem('currentToken');

    const username = 'admin';
    const password = 'cauca2017';

    if (username && password) {
      return this.put(
        'auth',
        JSON.stringify({
          username: 'admin',
          password: 'cauca2017'
        }),
        this.secretkey()
      ).map((response: Response) => {
        return response.json();
      });
    }

    return this.put(
      'auth',
      '',
      this.secretkey()
    ).map((response: Response) => {
      return response.json();
    });
  }

  private secretkey() {
    const key = '5d98e9644cc8e3b1aea67e0c23c76b4c7ee3fb91546402fad725a15e';

    if (key) {
      return new RequestOptions({
        headers: new Headers({
          'Authorization': 'Key ' + key
        })
      });
    }
  }
}
