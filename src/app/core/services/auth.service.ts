import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/user';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_KEY: string;
  private fakeUser: IUser;

  constructor(private localStorageService: LocalStorageService ) {
    this.USER_KEY = 'USER_KEY';
    this.fakeUser = {
      id: 1,
      first_name: 'Andrei',
      last_name: 'Osipov',
      login: 'test_login',
      password: 'test-pass',
    };
  }

  login(user: IUser): void {
    console.log('login action with creds: ', user.login, user.password);
    this.localStorageService.setItem(this.USER_KEY, this.fakeUser);
  }

  logout(): void {
    console.log('logout');
    this.localStorageService.removeItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.localStorageService.getItem(this.USER_KEY);
  }

  getUserInfo(): IUser {
    return this.localStorageService.getItem(this.USER_KEY);

  }
}
