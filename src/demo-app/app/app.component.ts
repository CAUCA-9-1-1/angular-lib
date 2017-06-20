import { Component, OnInit } from '@angular/core';

import {
  ConfigService,
  DevextremeDatagrid,
  HttpService,
  WindowRefService,
} from '../../lib';

@Component({
  selector: 'cause-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent extends DevextremeDatagrid implements OnInit {
  public infos = [
    {name: {'fr': 'test 1'}},
    {name: {'fr': 'test 2'}}
  ];

  constructor(
    private config?: ConfigService,
    private http?: HttpService,
    private windowRef?: WindowRefService,
  ) {
    super();

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

  public onDatagridUpdated() {
    console.log('updated');
  }

  public onDatagridRemoved() {
    console.log('removed');
  }
}
