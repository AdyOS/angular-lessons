import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../core/interfaces/user';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

  @Input()
  public user: IUser;

  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.user = {};
  }

  onLoginClick() {
    this.authService.login(this.user)
      .subscribe(user => {
        if (user.length) {
          this.localStorageService.setItem(this.localStorageService.USER_KEY, user);
          this.localStorageService.setItem(this.localStorageService.TOKEN_KEY, { token: '1qweqwc11' });
          this.router.navigate(['/']);
        }
      });

  }
}
