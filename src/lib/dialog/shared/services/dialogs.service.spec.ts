import { TestBed, inject } from '@angular/core/testing';
import { CauseSharedModule } from '../../../shared/module';

import { DialogsService } from './dialogs.service';

describe('DialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CauseSharedModule
      ],
      providers: [
        DialogsService,
      ]
    });
  });

  it('should ...', inject([DialogsService], (service: DialogsService) => {
    expect(service).toBeTruthy();
  }));
});
