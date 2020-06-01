import {Pipe, PipeTransform} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], ...args: unknown[]): ICourse[] {

    if (!courses.length) {
      return courses;
    }

    return courses.sort((a, b) => a.create_date.getTime() - b.create_date.getTime());
  }

}
