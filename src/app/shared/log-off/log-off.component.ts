import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.less'],
})
export class LogOffComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickLogin() {
    console.log('login');
    this.router.navigate(['/login']);
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
