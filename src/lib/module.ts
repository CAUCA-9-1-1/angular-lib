import { NgModule, ModuleWithProviders } from '@angular/core';

import { CauseCoreModule } from './core';
import { CauseDialogModule } from './dialog';
import { CauseFormModule } from './form';
import { CauseSharedModule } from './shared';

const CAUSE_MODULES = [
  CauseCoreModule,
  CauseDialogModule,
  CauseFormModule,
];

@NgModule({
  exports: CAUSE_MODULES,
  imports: [
    CauseSharedModule,
    CauseCoreModule.forRoot(),
    CauseDialogModule.forRoot(),
    CauseFormModule.forRoot(),
  ]
})
export class CauseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CauseModule,
      providers: []
    };
  }
}
