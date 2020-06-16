import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interfaces/user';
import { LocalStorageService } from '../../core/services/local-storage.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API_URL = 'http://localhost:3001/users';
  public user: BehaviorSubject<IUser> = new BehaviorSubject<any>({});
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private localStorageService: LocalStorageService, private httpClient: HttpClient) {

  }

  login(user: IUser): Observable<IUser[]> {
    console.log('login action with creds: ', user.login, user.password);
    return this.httpClient.get<IUser[]>(`${this.API_URL}/?login=${user.login}&password=${user.password}`);
  }

  logout(): void {
    console.log('logout');
    this.localStorageService.removeItem(this.localStorageService.USER_KEY);
    this.localStorageService.removeItem(this.localStorageService.TOKEN_KEY);
    this.isAuthenticated.next(false);
  }

  getUserInfo(): IUser {
    return this.localStorageService.getItem(this.localStorageService.USER_KEY);
  }

  setUserData(user: IUser) {
    this.user.next(user);
    this.isAuthenticated.next(true);
  }
}
