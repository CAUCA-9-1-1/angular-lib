import { Component, OnInit } from '@angular/core';

import {
  DevextremeDatagrid,
  DialogsService,
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
    private dialog?: DialogsService,
    private http?: HttpService,
    private windowRef?: WindowRefService,
  ) {
    super();
  }

  ngOnInit() {
  }

  public onTestDialogConfirm() {
    this.dialog.confirm('Test confirm', 'Question oui/non');
  }

  public onTestDialogFullscreen() {
    this.dialog.fullscreen('Test fullscreen', 'Avec du contenu plein écran');
  }

  public onTestDialogWait() {
    this.dialog.wait();
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
