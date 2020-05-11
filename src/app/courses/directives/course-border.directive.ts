import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {

  @Input() appCourseBorder: Date;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const now: Date = (new Date(Date.now()));
    const createDate: number = this.appCourseBorder.getTime();
    const currentDate: number = (now).getTime();
    const freshCourseDate: number = new Date(now.setDate( now.getDate() - 14)).getTime();

    if (createDate < currentDate && createDate >= freshCourseDate) {
      this.el.nativeElement.style.border = '2px solid green';
    } else if (createDate > currentDate) {
      this.el.nativeElement.style.border = '2px solid blue';
    }
  }
}
