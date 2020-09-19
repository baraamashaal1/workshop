import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    SharedModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
