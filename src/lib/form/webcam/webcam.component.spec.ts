import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseSharedModule } from '../../shared/module';
import { WebcamComponent } from './webcam.component';

describe('WebcamComponent', () => {
  let component: WebcamComponent;
  let fixture: ComponentFixture<WebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CauseSharedModule ],
      declarations: [ WebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
