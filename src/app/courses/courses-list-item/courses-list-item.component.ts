import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.less']
})
export class CoursesListItemComponent implements OnInit {

  @Input()
  public course: ICourse;

  @Output()
  public delete = new EventEmitter<number>();
  @Output()
  public edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(courseId: number) {
    this.delete.emit(courseId);
  }

  onClickEdit(courseId: number) {
    this.edit.emit(courseId);
  }
}
