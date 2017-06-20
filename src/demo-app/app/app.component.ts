import { Component, OnInit } from '@angular/core';

import {
  ConfigService,
  HttpService,
  WindowRefService,
} from '../../lib';

@Component({
  selector: 'cause-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(
    private config?: ConfigService,
    private http?: HttpService,
    private windowRef?: WindowRefService,
  ) {
    this.config.useLang('fr');
  }

  ngOnInit() {
  }

  public onTestHttpService() {
    this.http.get('assets/cause/locale/en.json').subscribe(data => {
      alert('requête terminé');
    });
  }

  public onTestWindowReference() {
    console.log(this.windowRef.nativeObject('navigator'));
  }
}
