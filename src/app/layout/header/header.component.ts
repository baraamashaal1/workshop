import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';


@Component({
  selector: 'link-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.data = data.state.root.firstChild?.data.breadcrumb;
      }
    });
  }

}
