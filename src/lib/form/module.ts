import { NgModule, ModuleWithProviders } from '@angular/core';
import { DxTabPanelModule, DxTextBoxModule } from 'devextreme-angular';

import { CauseSharedModule } from '../shared';
import { MultilangComponent } from './multilang/multilang.component';
import { TakePictureComponent } from './take-picture/take-picture.component';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
  declarations: [
    MultilangComponent,
    TakePictureComponent,
    WebcamComponent,
  ],
  entryComponents: [
    WebcamComponent,
  ],
  exports: [
    MultilangComponent,
    TakePictureComponent,
  ],
  imports: [
    DxTabPanelModule,
    DxTextBoxModule,

    CauseSharedModule,
  ],
  providers: []
})
export class CauseFormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CauseFormModule,
      providers: []
    };
  }
}
