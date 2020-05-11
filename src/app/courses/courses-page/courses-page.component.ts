import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';
import { FilterCoursePipe} from '../pipes/filter-course.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
  providers: [FilterCoursePipe],
})
export class CoursesPageComponent implements OnInit {

  @Input()
  public searchValue: string;

  public coursesList: ICourse[] = [];

  private storedCoursesList: ICourse[] = [];

  constructor(private filterCoursePipe: FilterCoursePipe) { }

  ngOnInit(): void {
    this.searchValue = '';

    for (let i = 0; i < 5; i++) {
      const now: Date = (new Date(Date.now()));

      let date: Date;

      if (i % 2) {
        date = new Date(now.setDate( now.getDate() + i));
      } else {
        date = new Date(now.setDate( now.getDate() - 15));
      }

      if (i === 3) {
        date = (new Date(Date.now()));
      }

      this.coursesList.push({
        id: i,
        title: `This is course #${i}`,
        create_date: date,
        duration: i * 60 + Math.floor(Math.random() * 50),
        description: 'Some description',
        topRated: !!(i % 2),
      });
    }

    this.storedCoursesList = this.coursesList.slice();
  }

  onSearchClick(): void {
    console.log('search value:', this.searchValue);
    this.coursesList = this.filterCoursePipe.transform(this.searchValue, this.storedCoursesList.slice());
  }
}
