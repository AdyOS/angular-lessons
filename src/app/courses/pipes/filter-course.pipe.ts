import {Pipe, PipeTransform} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import {CoursesService} from '../services/courses.service';
import {Observable} from 'rxjs';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  constructor(private coursesService: CoursesService) {

  }

  transform(value: string): Observable<ICourse[]> {
    return this.coursesService.findByText(value);
  }

}
