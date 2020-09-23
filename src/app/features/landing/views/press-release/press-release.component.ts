import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/services/shared.service';
import {ActivatedRoute} from '@angular/router';
import {Articles} from '../../../../shared/interfaces/pressReleases.interface';
import {Subscription} from "rxjs";

@Component({
  selector: 'link-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss']
})
export class PressReleaseComponent implements OnInit, OnDestroy {
  articleId: number;
  article: (Articles | undefined);

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {
    this.articleId = +route.snapshot.params.id;
  }

  ngOnInit(): void {
     this.sharedService.getArticleDetailsByID(this.articleId).subscribe((article) => {
      this.article = article;
    });
  }

  ngOnDestroy(): void {
    // this.article$?.unsubscribe();
  }

}
