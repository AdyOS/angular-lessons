import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';



@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, CoursesPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CoursesListComponent, CoursesListItemComponent, CoursesPageComponent],
})
export class CoursesModule { }
