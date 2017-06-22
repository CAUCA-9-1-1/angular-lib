import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MdDialogRef } from '@angular/material';

import { CauseSharedModule } from '../../shared/module';
import { WaitComponent } from './wait.component';

class MdDialogRefMock {
}

describe('WaitComponent', () => {
  let component: WaitComponent;
  let fixture: ComponentFixture<WaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WaitComponent
      ],
      imports: [
        HttpModule,

        CauseSharedModule,
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
