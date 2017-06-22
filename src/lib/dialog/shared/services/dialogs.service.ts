import {Injectable} from '@angular/core';
import {MdDialogRef, MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Rx';

import {WindowRefService} from '../../../shared/services/window-ref.service';
import {FullscreenComponent} from '../../fullscreen/fullscreen.component';
import {WaitComponent} from '../../wait/wait.component';
import {ConfirmComponent} from '../../confirm/confirm.component';

@Injectable()
export class DialogsService {
  private dialogRef:
    MdDialogRef<WaitComponent|FullscreenComponent|ConfirmComponent>;

  constructor(
    private dialog: MdDialog,
    private windowRef: WindowRefService
  ) { }

  public close() {
    const modal = this.windowRef.nativeDocument.querySelectorAll('body .modal');

    if (modal.length > 0) {
      modal[0].parentNode.removeChild(modal[0]);
    } else if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  public confirm(title: string, question: string): Observable<boolean> {
    let dialogRef: MdDialogRef<ConfirmComponent>;

    dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.question = question;

    this.dialogRef = dialogRef;

    return dialogRef.afterClosed();
  }

  public fullscreen(title: string, content: string): Observable<boolean> {
    let dialogRef: MdDialogRef<FullscreenComponent>;

    dialogRef = this.dialog.open(FullscreenComponent, {
      width: (this.windowRef.nativeWindow.innerWidth < 700 ? '100%' : '95%'),
      height: (this.windowRef.nativeWindow.innerWidth < 700 ? '100%' : '95%'),
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;

    this.dialogRef = dialogRef;

    return dialogRef.afterClosed();
  }

  public wait() {
    const body = this.windowRef.nativeDocument.querySelectorAll('body')[0];
    const div = this.windowRef.nativeDocument.createElement('div');

    div.className = 'modal';
    div.innerHTML =
      '<div class="content">' +
        '<h1>Veuillez patienter</h1>' +
        '<img src="./assets/cause/images/spinner.gif" />' +
      '</div>';
    body.appendChild(div);

    /* Angular MdDialog doesn't close when we come back of other app with cordova

    let dialogRef: MdDialogRef<WaitDialogComponent>;

    dialogRef = this.dialog.open(WaitDialogComponent);

    this.dialogRef = dialogRef;

    return dialogRef.afterClosed();*/
  }
}
