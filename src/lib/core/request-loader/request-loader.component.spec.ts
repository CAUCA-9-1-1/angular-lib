import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseSharedModule } from '../../shared/module';
import { RequestLoaderComponent } from './request-loader.component';
import { RequestLoaderService } from './request-loader.service';

describe('RequestLoaderComponent', () => {
  let component: RequestLoaderComponent;
  let fixture: ComponentFixture<RequestLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CauseSharedModule,
      ],
      declarations: [
        RequestLoaderComponent,
      ],
      providers: [
        RequestLoaderService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
