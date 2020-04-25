import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.less']
})
export class CoursesListItemComponent implements OnInit {

  @Input()
  public course: ICourse;

  constructor() { }

  ngOnInit(): void {
  }

}
