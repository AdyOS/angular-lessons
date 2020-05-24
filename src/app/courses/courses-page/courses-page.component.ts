import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import { FilterCoursePipe} from '../pipes/filter-course.pipe';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';
import {Observable} from 'rxjs';

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

  private pageId = 1;

  constructor(
    private filterCoursePipe: FilterCoursePipe,
    private coursesService: CoursesService,
    private router: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit(): void {
    this.searchValue = '';
    this.loadCourses();
  }

  loadCourses() {
    this.coursesService
      .getList(this.pageId)
      .subscribe(courses => {
        this.coursesList = [...this.coursesList, ...courses];
        this.storedCoursesList = this.coursesList.slice();
        this.breadcrumbsService.setTitle('');
      });
  }

  onSearchClick(): void {
    this.filterCoursePipe
      .transform(this.searchValue)
      .subscribe(courses => {
        console.log(this.searchValue, courses);
        this.coursesList = courses;
      });
  }

  onClickLoadMore(): void {
    this.pageId++;
    this.loadCourses();
  }
}
