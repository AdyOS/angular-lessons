import {Component, OnInit} from '@angular/core';
import {ICourse} from '../../interfaces/cource';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  public coursesList: ICourse[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.coursesList.push({
        id: i,
        title: `This is course #${i}`,
        create_date: `${i} Apr, 2020`,
        duration: i,
        description: 'Some description'
      });
    }
  }
}
