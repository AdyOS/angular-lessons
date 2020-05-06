import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  @Input()
  public coursesList: ICourse[] = [];

  constructor() {
  }

  ngOnInit(): void {}

  onDelete(courseId: number) {
    console.log('on delete event:', courseId);
  }

  onEdit(courseId: number) {
    console.log('on edit event:', courseId);
  }
}
