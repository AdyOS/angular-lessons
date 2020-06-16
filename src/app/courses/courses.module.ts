import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModalModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CourseEditPageComponent } from './course-edit-page/course-edit-page.component';
import { DateInputComponent} from '../shared/date-input/date-input.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    DeleteModalComponent,
    CourseEditPageComponent,
    DateInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  exports: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    DurationPipe,
    OrderByPipe,
  ],
  entryComponents: [
    DeleteModalComponent,
  ],
  providers: [
    NgbActiveModal,
  ]
})
export class CoursesModule { }
