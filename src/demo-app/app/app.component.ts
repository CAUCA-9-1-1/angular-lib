import { Component, OnInit } from '@angular/core';
import { locale } from 'devextreme/localization';

import {
  DevextremeDatagrid,
  HttpService,
  WindowRefService,
} from '../../lib';
import '../../lib/core/extends/devextreme-fr';

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
    private http?: HttpService,
    private windowRef?: WindowRefService,
  ) {
    super();

    locale('fr');
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
