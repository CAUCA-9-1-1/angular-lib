import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDialogRef} from '@angular/material';

import { CauseSharedModule } from '../../shared/module';
import { FullscreenComponent } from './fullscreen.component';

class MdDialogRefMock {
}

describe('FullscreenComponent', () => {
  let component: FullscreenComponent;
  let fixture: ComponentFixture<FullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FullscreenComponent,
      ],
      imports: [
        CauseSharedModule,
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
