import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
  public footerNav = [
    {
      title: 'Who We Are',
      links: [{
        name: 'About Us',
        route: '.'
      }, {
        name: 'Mission, Vission & Goals',
        route: '.'
      }, {
        name: 'Our Message',
        route: '.'
      }, {
        name: 'Board of Trustees',
        route: '.'
      }, {
        name: 'Board of Directors',
        route: '.'
      }, {
        name: 'FAQ’s',
        route: '.'
      }]
    }, {
      title: 'What we do',
      links: [{
        name: 'Research',
        route: '.'
      }, {
        name: 'Programmes',
        route: '.'
      }, {
        name: 'Collaborations',
        route: '.'
      }]
    }, {
      title: 'Get Involved',
      links: [{
        name: 'Donate',
        route: '.'
      }, {
        name: 'Partners',
        route: '.'
      }]
    }, {
      title: 'Media Center',
      links: [{
        name: 'Photo Gallery',
        route: '.'
      }, {
        name: 'Video Gallery',
        route: '.'
      }, {
        name: 'Social Media Hub',
        route: '.'
      }, {
        name: 'Events',
        route: '.'
      }]
    }, {
      title: 'Contact Us',
      links: [{
        name: 'Contact Details',
        route: '.'
      }, {
        name: 'Careers',
        route: '.'
      }]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
