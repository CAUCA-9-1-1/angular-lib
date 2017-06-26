import { NgModule } from '@angular/core';

import { CauseModule } from '../lib';

@NgModule({
  imports: [
    CauseModule.forRoot()
  ],
  providers: []
})
export class CauseTestModule { }
