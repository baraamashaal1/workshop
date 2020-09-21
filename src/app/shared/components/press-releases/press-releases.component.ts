import {Component, Input, OnInit} from '@angular/core';
import {Articles, PressReleases, SourceCategory} from '../../interfaces/pressReleases.interface';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'link-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss']
})
export class PressReleasesComponent implements OnInit {
  public articles: Articles[];
  public categories: SourceCategory[];
  public months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  public days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  @Input() public category: number;
  @Input() public showOnHomepage: boolean;

  constructor(private sharedService: SharedService) {
    this.category = 0;
    this.showOnHomepage = true;
    this.articles = [];
    this.categories = [];
  }

  ngOnInit(): void {
    this.sharedService.getPressReleases().subscribe((res: PressReleases) => {
      this.articles = res.articles;
      this.categories = res.sourceCategory;
    });
  }


}
