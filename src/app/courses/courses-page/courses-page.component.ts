import {Component, Input, OnInit} from '@angular/core';
import { debounceTime, map, takeUntil, filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';
import {ICourse} from '../../core/interfaces/course';
import { FilterCoursePipe} from '../pipes/filter-course.pipe';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';
import {UnsubscribeComponent} from '../../shared/unsubscribe/unsubscribe.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
  providers: [FilterCoursePipe],
})
export class CoursesPageComponent extends UnsubscribeComponent implements OnInit {

  @Input()
  public searchValue: string;

  public coursesList: ICourse[] = [];

  private pageId = 1;

  constructor(
    private filterCoursePipe: FilterCoursePipe,
    private coursesService: CoursesService,
    private router: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService) {

    super();
  }

  ngOnInit(): void {
    this.searchValue = '';
    this.loadCourses();
    this.searchSubscribtion();
  }

  loadCourses() {
    this.coursesService
      .getList(this.pageId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(courses => {
        this.coursesList = [...this.coursesList, ...courses];
        this.breadcrumbsService.setTitle('');
      });
  }

  searchCourses(searchString: string): Observable<ICourse[]> {
    return this.filterCoursePipe.transform(searchString);
  }

  onClickLoadMore(): void {
    this.pageId++;
    this.loadCourses();
  }

  searchSubscribtion() {
    const input = document.getElementById('input-search') as HTMLInputElement;
    fromEvent(input, 'keyup').pipe(
      takeUntil(this.ngUnsubscribe),
      map(() => input.value),
      // filter(text => !!text),
      distinctUntilChanged(),
      debounceTime(250),
      switchMap(this.searchCourses.bind(this)),
    ).subscribe(
      (courses) => {
        this.coursesList = courses;
      },
      err => console.error(err)
    );
  }
}
