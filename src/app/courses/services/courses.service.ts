import { Injectable } from '@angular/core';
import {ICourse} from '../../core/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList: ICourse[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      const now: Date = (new Date(Date.now()));

      let date: Date;

      if (i % 2) {
        date = new Date(now.setDate( now.getDate() + i));
      } else {
        date = new Date(now.setDate( now.getDate() - 15));
      }

      if (i === 3) {
        date = (new Date(Date.now()));
      }

      this.coursesList.push({
        id: i,
        title: `This is course #${i}`,
        create_date: date,
        duration: i * 60 + Math.floor(Math.random() * 50),
        description: 'Some description',
        topRated: !!(i % 2),
      });
    }
  }

  getList(): ICourse[] {
    return this.coursesList;
  }

  create(course: ICourse): void {
    this.coursesList.push(course);
  }

  getById(id: number): ICourse | void {
    return this.coursesList.find((course: ICourse) => course.id === id);
  }

  update(id: number, course: ICourse): void {
    this.delete(id);
    this.create(course);
  }

  delete(id: number): void {
    this.coursesList = this.coursesList.filter((course: ICourse) => course.id !== id);
  }
}
