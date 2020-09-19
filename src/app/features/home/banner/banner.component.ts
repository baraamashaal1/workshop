import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images = ['assets']
  constructor() { }

  ngOnInit(): void {
  }

}
