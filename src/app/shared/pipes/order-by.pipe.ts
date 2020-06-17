import {Pipe, PipeTransform} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], ...args: unknown[]): ICourse[] {

    if (!courses.length) {
      return courses;
    }
    return courses.sort((a, b) =>
      moment(a.create_date, 'DD/MM/YYYY').unix()  - moment(b.create_date, 'DD/MM/YYYY').unix());
  }

}
