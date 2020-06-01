import { OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';

export abstract class UnsubscribeComponent implements OnDestroy {

  protected ngUnsubscribe = new Subject<any>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
