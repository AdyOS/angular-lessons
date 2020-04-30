import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less']
})
export class CoursesPageComponent implements OnInit {

  @Input()
  public searchValue: string | number;

  constructor() { }

  ngOnInit(): void {
    this.searchValue = '';
  }

  onSearchClick(): void {
    console.log('search value:', this.searchValue);
  }
}
