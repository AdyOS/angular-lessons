import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../core/interfaces/cource';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  transform(value: string, courses: ICourse[]): ICourse[] {
    return courses.filter((course: ICourse) => course.title.includes(value));
  }

}
