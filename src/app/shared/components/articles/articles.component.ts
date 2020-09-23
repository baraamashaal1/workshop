import {Component, Input, OnInit} from '@angular/core';
import {Articles, PressReleases, SourceCategory} from '../../interfaces/pressReleases.interface';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'link-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public loading = false;
  public loadingPercentage = 0;
  public articles: Articles[];
  public categories: SourceCategory[];
  public search = '';
  public limitTo = 8;
  public months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  public days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  @Input() public category: number;
  @Input() public showOnHomepage: boolean;
  @Input() public showFilters: boolean;

  constructor(private sharedService: SharedService) {
    this.category = 0;
    this.showOnHomepage = false;
    this.articles = [];
    this.categories = [];
    this.showFilters = true;
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    const interval = setInterval(() => {
      this.loadingPercentage = this.loadingPercentage + 10;
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
      this.sharedService.getPressReleases().subscribe((res: PressReleases) => {
        this.articles = res.articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        this.categories = res.sourceCategory;
        this.loading = false;
        this.loadingPercentage = 0;
        this.limitTo = 8;
      });
    }, this.showFilters ? 1000 : 0);
  }

  loadMoreArticles(): void {
    this.limitTo = this.limitTo + 4;
  }
}
