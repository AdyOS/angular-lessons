import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';
import { FilterCoursePipe} from '../pipes/filter-course.pipe';
import {CoursesService} from '../../core/services/courses.service';

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

  constructor(private filterCoursePipe: FilterCoursePipe, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.searchValue = '';

    this.coursesList = this.coursesService.getList();

    this.storedCoursesList = this.coursesList.slice();
  }

  onSearchClick(): void {
    console.log('search value:', this.searchValue);
    this.coursesList = this.filterCoursePipe.transform(this.searchValue, this.storedCoursesList.slice());
  }
}
