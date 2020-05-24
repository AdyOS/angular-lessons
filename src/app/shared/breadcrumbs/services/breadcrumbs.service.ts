import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  public courseTitle: BehaviorSubject<string> = new BehaviorSubject<any>('');

  setTitle(title: string) {
    this.courseTitle.next(title);
  }
}
