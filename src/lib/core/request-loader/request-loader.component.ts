import {Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription } from 'rxjs/Subscription';

import {RequestLoaderService} from './request-loader.service';
import {RequestLoader} from './request-loader.model';

@Component({
  selector: 'cause-request-loader',
  templateUrl: './request-loader.component.html',
  styleUrls: ['./request-loader.component.styl']
})
export class RequestLoaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public show = false;

  constructor(private loaderService: RequestLoaderService) { }

  public ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: RequestLoader) => {
        this.show = state.show;
      });
  }


  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
