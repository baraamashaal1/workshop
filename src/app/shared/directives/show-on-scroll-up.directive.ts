import {Directive, ElementRef, HostListener, Inject, Renderer2} from '@angular/core';

@Directive({
  selector: '[linkShowOnScrollUp]'
})
export class ShowOnScrollUpDirective {
  private prevScroll: number;
  private curScroll: number;
  private direction: number;
  private prevDirection: number;

  constructor(private el: ElementRef, @Inject('Window') private window: Window, private renderer2: Renderer2,
  ) {
    this.prevScroll = window.scrollY;
    this.curScroll = window.scrollY;
    this.direction = 0;
    this.prevDirection = 0;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(): void {
    this.curScroll = this.window.scrollY;

    if (this.curScroll > this.prevScroll) {
      // up
      this.direction = 2;
    } else if (this.curScroll < this.prevScroll) {
      // down
      this.direction = 1;
    }

    if (this.direction !== this.prevDirection) {
      this.toggleDirectionClasses(this.direction, this.curScroll);
    }
    this.prevScroll = this.curScroll;
  }

  toggleDirectionClasses(direction: number, curScroll: number): void {
    if (direction === 2 && curScroll > 300) {
      this.renderer2.addClass(this.el.nativeElement, 'scrolling-down');
      this.renderer2.removeClass(this.el.nativeElement, 'scrolling-up');
      this.prevDirection = direction;
    } else if (direction === 1) {
      this.renderer2.addClass(this.el.nativeElement, 'scrolling-up');
      this.renderer2.removeClass(this.el.nativeElement, 'scrolling-down');
      this.prevDirection = direction;
    }
  }
}
