import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadcrumbsService} from '../../shared/breadcrumbs/services/breadcrumbs.service';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.less'],

})
export class CourseEditPageComponent implements OnInit {
  @Input()
  public course: ICourse;

  constructor(
    private calendar: NgbCalendar,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService) {

  }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');

    this.loadCourse(id);
  }

  loadCourse(id: number): void {
    if (id >= 0) {
      this.course = this.coursesService.getById(id);
      this.breadcrumbsService.setTitle(this.course.title);
    } else {
      this.course = this.coursesService.getInitialState();
    }
  }

  onClickSave() {
    if (this.course.id < 0) {
      this.coursesService.create(this.course);
    } else {
      this.coursesService.update(this.course);
    }
    this.router.navigate(['/']);
  }

  onClickCancel() {
    this.router.navigate(['/']);
  }

  onDateChange(event) {
    this.course.create_date = new Date(event);
  }

}