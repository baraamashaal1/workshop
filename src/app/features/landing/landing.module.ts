import {NgModule} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {BannerComponent} from './components/banner/banner.component';
import {SharedModule} from '../../shared/shared.module';
import {OurProgramsComponent} from './components/our-programs/our-programs.component';
import {SuccessStoryComponent} from './components/success-story/success-story.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, OurProgramsComponent, SuccessStoryComponent, NewsComponent],
  imports: [
    SharedModule

  ],
  exports: [HomeComponent]
})
export class LandingModule {
}
