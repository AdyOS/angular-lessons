import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../core/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input()
  public user: IUser;

  constructor() { }

  ngOnInit(): void {

  }
}
