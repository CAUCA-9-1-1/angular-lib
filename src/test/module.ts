import { NgModule } from '@angular/core';

import { CauseCoreModule } from '../lib';

import 'rxjs/add/operator/debounceTime.js';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

@NgModule({
  imports: [
    CauseCoreModule.forRoot()
  ],
  providers: []
})
export class CauseTestModule { }
