import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    DurationPipe,
    OrderByPipe,
  ],
})
export class CoursesModule { }
