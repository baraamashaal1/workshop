import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {BannerComponent} from './banner/banner.component';
import {SharedModule} from '../../shared/shared.module';
import {OurProgramsComponent} from './our-programs/our-programs.component';
import { SuccessStoryComponent } from './success-story/success-story.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, OurProgramsComponent, SuccessStoryComponent],
  imports: [
    SharedModule

  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
