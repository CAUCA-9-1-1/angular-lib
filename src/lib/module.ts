import { NgModule, ModuleWithProviders } from '@angular/core';

import { CauseCoreModule } from './core';
import { CauseFormModule } from './form';
import { CauseSharedModule } from './shared';

const CAUSE_MODULES = [
  CauseCoreModule,
  CauseFormModule,
  CauseSharedModule,
];

@NgModule({
  exports: CAUSE_MODULES,
  imports: [
    CauseSharedModule,
    CauseCoreModule.forRoot(),
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
