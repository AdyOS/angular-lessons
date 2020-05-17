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

  private add: boolean;

  constructor(
    private calendar: NgbCalendar,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService) {

    this.add = false;
  }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.course = this.coursesService.getById(id);
      this.breadcrumbsService.setTitle(this.course.title);
      console.log('date:', this.course.create_date);
    } else {
      this.course = {
        id: -1,
        title: '',
        create_date: (new Date(Date.now())),
        duration: 0,
        description: '',
        topRated: false,
        authors: '',
      };

      this.add = true;
    }
  }

  onClickSave() {
    if (this.add) {
      this.coursesService.create(this.course);
    } else {
      this.coursesService.update(this.course.id, this.course);
    }
    this.router.navigate(['/']);
  }

  onClickCancel() {
    this.router.navigate(['/']);
  }
}
