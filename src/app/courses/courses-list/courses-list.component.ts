import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import {CoursesService} from '../services/courses.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  @Input()
  public coursesList: ICourse[] = [];

  constructor(private coursesService: CoursesService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {}

  onDelete(courseId: number) {
    const modalRef = this.modalService.open(DeleteModalComponent, {ariaLabelledBy: 'deleteModal'});
    modalRef.result.then(() => {
      this.coursesService.delete(courseId);
      this.coursesList = this.coursesService.getList();
    }, () => {});
  }

  onEdit(courseId: number) {
    this.router.navigate([`/courses/${courseId}`]);
  }

  onClickAddNew() {
    this.router.navigate([`/courses/new`]);
  }
}
