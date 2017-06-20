import { NgModule, ModuleWithProviders } from '@angular/core';
import { DxTabPanelModule, DxTextBoxModule } from 'devextreme-angular';

import { CauseSharedModule } from '../shared';
import { MultilangComponent } from './multilang/multilang.component';

@NgModule({
  declarations: [
    MultilangComponent,
  ],
  exports: [
    MultilangComponent,
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
