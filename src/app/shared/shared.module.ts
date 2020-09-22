import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './components/articles/articles.component';
import { PressReleasesPipe } from './pipes/press-releases.pipe';
import { ShowOnScrollUpDirective } from './directives/show-on-scroll-up.directive';


@NgModule({
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  declarations: [ArticlesComponent, PressReleasesPipe, ShowOnScrollUpDirective],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
    exports: [CommonModule, NgbModule, RouterModule, HttpClientModule, ArticlesComponent, ShowOnScrollUpDirective]
})
export class SharedModule {
}
