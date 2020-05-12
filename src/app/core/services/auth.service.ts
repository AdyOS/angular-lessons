import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/user';
import localStorageExp from '../../core/helpers/localstorage/localStorageExp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_KEY: string;
  private fakeUser: IUser;

  constructor() {
    this.USER_KEY = 'USER_KEY';
    this.fakeUser = {
      id: 1,
      first_name: 'Andrei',
      last_name: 'Osipov',
      login: 'test_login',
      password: 'test-pass',
    }
  }

  login(user: IUser): void {
    console.log('login action with creds: ', user.login, user.password);
    localStorageExp.setItem(this.USER_KEY, this.fakeUser);
  }

  logout(): void {
    console.log('logout');
    localStorageExp.removeItem(this.USER_KEY, this.fakeUser);
  }

  isAuthenticated(): boolean {
    return !!localStorageExp.getItem(this.USER_KEY);
  }

  getUserInfo(): IUser {
    return localStorageExp.getItem(this.USER_KEY);

  }
}
