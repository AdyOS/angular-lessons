import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public user: IUser;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      id: 1,
      last_name: 'Osipov',
      first_name: 'Andrei',
    };
  }

}
