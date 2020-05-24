import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../core/interfaces/user';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

  @Input()
  public user: IUser;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = {};
  }

  onLoginClick() {
    this.authService.login(this.user);
    this.router.navigate(['/']);
  }
}
