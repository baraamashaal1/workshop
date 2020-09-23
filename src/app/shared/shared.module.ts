import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './components/articles/articles.component';
import {PressReleasesPipe} from './pipes/press-releases.pipe';
import {ShowOnScrollUpDirective} from './directives/show-on-scroll-up.directive';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  providers: [
    {provide: 'Window', useValue: window}
  ],
  declarations: [ArticlesComponent, PressReleasesPipe, ShowOnScrollUpDirective, BreadcrumbComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CommonModule, NgbModule, RouterModule, HttpClientModule, ArticlesComponent, ShowOnScrollUpDirective, BreadcrumbComponent]
})
export class SharedModule {
}
