import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'link-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  images = ["assets/images/home/banner/Layer 55@1X.png", "assets/images/home/banner/Layer 49@1X.png", "assets/images/home/banner/Layer 28@1X.png", "assets/images/home/banner/Layer 27@1X.png", "assets/images/home/banner/Layer 17@1X.png", "assets/images/home/banner/Layer 15@1X.png", "assets/images/home/banner/Layer 14@1X.png", "assets/images/home/banner/Layer 13@1X.png"]

  constructor() {
  }

  ngOnInit(): void {
  }

}
