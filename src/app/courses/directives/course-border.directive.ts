import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {

  @Input() appCourseBorder: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const createDate: number = moment(this.appCourseBorder, 'DD/MM/YYYY').unix();
    const currentDate: number = moment().unix();
    const freshCourseDate: number = moment().subtract(7, 'd').unix();

    if (createDate < currentDate && createDate >= freshCourseDate) {
      this.el.nativeElement.style.border = '2px solid green';
    } else if (createDate > currentDate) {
      this.el.nativeElement.style.border = '2px solid blue';
    }
  }
}
