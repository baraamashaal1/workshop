import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'link-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isMenuCollapsed = true;
  public navItems = [
    {
      name: 'Home',
      route: '.'
    }, {
      name: 'Who We Are',
      route: '.'
    }, {
      name: 'What We Do',
      route: '.'
    }, {
      name: 'Get Involved',
      route: '.'
    }, {
      name: 'Media Centre',
      route: '.'
    }, {
      name: 'Contact Us',
      route: '.'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
