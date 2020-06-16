import {Injectable} from '@angular/core';
import {ICourse} from '../../core/interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList: ICourse[] = [];
  public API_URL = 'http://localhost:3001/courses';

  constructor(private httpClient: HttpClient) {

  }

  formatDate(courses: ICourse[]): ICourse[] {
    return courses.map(course => {
      course.create_date = moment(course.create_date).format('DD/MM/YYYY');//new Date(course.create_date);

      return course;
    });
  }

  getList(pageId: number = 1): Observable<ICourse[]> {
    return this.httpClient
      .get<ICourse[]>(`${this.API_URL}/?_page=${pageId}`)
      .pipe(map(courses => this.formatDate(courses)));
  }

  create(course: ICourse): Observable<any> {
    delete course.id;

    return this.httpClient.post(this.API_URL, course);
  }

  getById(id: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.API_URL}/${id}`);
  }

  update(course: ICourse): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${course.id}`, course);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  findByText(searchString): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.API_URL}/?q=${searchString}`)
      .pipe(map(courses => this.formatDate(courses)));
  }

  getInitialState(): ICourse {
    return {
      id: -1,
      title: '',
      create_date: '',
      duration: 0,
      description: '',
      topRated: false,
      authors: '',
    };
  }
}
