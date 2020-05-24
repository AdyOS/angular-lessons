import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import { FilterCoursePipe} from '../pipes/filter-course.pipe';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';

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

  constructor(
    private filterCoursePipe: FilterCoursePipe,
    private coursesService: CoursesService,
    private router: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit(): void {
    this.searchValue = '';

    this.coursesList = this.coursesService.getList();
    this.storedCoursesList = this.coursesList.slice();
    this.breadcrumbsService.setTitle('');
  }

  onSearchClick(): void {
    this.coursesList = this.filterCoursePipe.transform(this.searchValue, this.storedCoursesList.slice());
  }
}
