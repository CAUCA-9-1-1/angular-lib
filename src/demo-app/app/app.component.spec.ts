import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DxDataGridModule } from 'devextreme-angular';

import { CauseTestModule } from '../../test/module';
import { CauseModule } from '../../lib';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterModule.forRoot([]),
        MaterialModule,
        DxDataGridModule,
        CauseModule.forRoot(),
        CauseTestModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        [{provide: APP_BASE_HREF, useValue : '/' }],
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-title').textContent)
      .toContain('Http Service');
  }));
});
