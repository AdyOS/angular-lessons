import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from './services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(
    public breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit(): void {

  }

}
