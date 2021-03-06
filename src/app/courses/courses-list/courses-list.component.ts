import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import {CoursesService} from '../services/courses.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {UnsubscribeComponent} from '../../shared/unsubscribe/unsubscribe.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent extends UnsubscribeComponent implements OnInit {

  @Input()
  public coursesList: ICourse[] = [];

  constructor(private coursesService: CoursesService, private modalService: NgbModal, private router: Router) {
    super();
  }

  ngOnInit(): void {}

  onDelete(courseId: number) {
    const modalRef = this.modalService.open(DeleteModalComponent, {ariaLabelledBy: 'deleteModal'});
    modalRef.result.then(async () => {
      this.coursesService.delete(courseId)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          this.coursesService
            .getList()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
              courses =>  {
                this.coursesList = courses;
              },
              (error: HttpErrorResponse) =>  {
                console.log('fooof', error);
              }
            );
        });
    }, () => {});
  }

  onEdit(courseId: number) {
    this.router.navigate([`/courses/${courseId}`]);
  }

  onClickAddNew() {
    this.router.navigate([`/courses/new`]);
  }
}
