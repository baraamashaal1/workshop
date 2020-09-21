import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'link-success-story',
  templateUrl: './success-story.component.html',
  styleUrls: ['./success-story.component.scss']
})
export class SuccessStoryComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer')
  swiperContainer!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // xs: 0,
    // sm: 576px,
    // md: 768px,
    // lg: 992px,
    // xl: 1200px
    const test = new Swiper(this.swiperContainer.nativeElement, {
      spaceBetween: 0,
      slidesPerView: 1,
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
    console.log(test);
  }

}
