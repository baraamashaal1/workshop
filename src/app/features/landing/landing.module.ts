import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {BannerComponent} from './home/banner/banner.component';
import {SharedModule} from '../../shared/shared.module';
import {OurProgramsComponent} from './home/our-programs/our-programs.component';
import { SuccessStoryComponent } from './home/success-story/success-story.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, OurProgramsComponent, SuccessStoryComponent],
  imports: [
    SharedModule

  ],
  exports: [HomeComponent]
})
export class LandingModule {
}
