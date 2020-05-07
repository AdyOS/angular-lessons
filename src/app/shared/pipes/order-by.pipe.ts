import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../../core/interfaces/cource';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], ...args: unknown[]): ICourse[] {

    return courses.sort((a, b) => a.create_date.getTime() - b.create_date.getTime());
  }

}
