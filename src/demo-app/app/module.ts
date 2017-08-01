import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    DxDataGridModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
