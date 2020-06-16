import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';
import {UnsubscribeComponent} from '../../shared/unsubscribe/unsubscribe.component';
import {takeUntil} from 'rxjs/operators';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { dateValueValidator} from '../../core/validators/date-validator';
import * as moment from 'moment';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.less'],

})
export class CourseEditPageComponent extends UnsubscribeComponent implements OnInit {
  @Input()
  public course: ICourse;

  form: FormGroup;

  private dateFormat = 'DD/MM/YYYY';

  constructor(
    private calendar: NgbCalendar,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService) {
    super();

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.compose([Validators.required, dateValueValidator(this.dateFormat)])),
      duration: new FormControl('', Validators.required),
      authors: new FormControl('', Validators.required),

    });
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
          this.course.create_date = moment(this.course.create_date).format(this.dateFormat);
          this.breadcrumbsService.setTitle(this.course.title);
          this.setFormData();
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

  onSubmit() {
  }

  onDateChange(event) {
    //this.course.create_date = new Date(event);
  }

  getCourseValue(propValue) {
    return this.course ? this.course[propValue] : '';
  }

  setFormData() {
    //const date = moment(this.course.create_date).format(this.dateFormat);
    console.log('this.course', this.course);
    this.form.patchValue({
      title: this.course.title,
      description: this.course.description,
      date: this.course.create_date,
      duration: this.course.duration,
      authors: this.course.authors,
    });
  }
}
