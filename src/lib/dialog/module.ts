import { NgModule, ModuleWithProviders } from '@angular/core';

import { CauseSharedModule } from '../shared';
import { DialogsService } from './shared/services/dialogs.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { WaitComponent } from './wait/wait.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    FullscreenComponent,
    WaitComponent,
  ],
  entryComponents: [
    ConfirmComponent,
    FullscreenComponent,
    WaitComponent,
  ],
  exports: [
    ConfirmComponent,
    FullscreenComponent,
    WaitComponent,
  ],
  imports: [
    CauseSharedModule,
  ],
  providers: [
    DialogsService,
  ]
})
export class CauseDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CauseDialogModule,
      providers: []
    };
  }
}
