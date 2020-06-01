import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';
import {UnsubscribeComponent} from '../../shared/unsubscribe/unsubscribe.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.less'],

})
export class CourseEditPageComponent extends UnsubscribeComponent implements OnInit {
  @Input()
  public course: ICourse;

  constructor(
    private calendar: NgbCalendar,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService) {
    super();
  }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');

    this.loadCourse(id);
  }

  loadCourse(id: number): void {
    if (id >= 0) {
      this.coursesService
        .getById(id)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(course => {
          this.course = course;
          this.breadcrumbsService.setTitle(this.course.title);
        });
    } else {
      this.course = this.coursesService.getInitialState();
    }
  }

  onClickSave() {
    if (this.course.id < 0) {
      this.coursesService.create(this.course)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(response => {
          this.router.navigate(['/']);
        });
    } else {
      this.coursesService.update(this.course)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(response => {
          this.router.navigate(['/']);
        });
    }

  }

  onClickCancel() {
    this.router.navigate(['/']);
  }

  onDateChange(event) {
    this.course.create_date = new Date(event);
  }

}
