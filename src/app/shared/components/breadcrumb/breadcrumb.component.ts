import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'link-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
  }

}
