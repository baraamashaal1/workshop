import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { LogoComponent } from './header/logo/logo.component';
import {SharedModule} from "../shared/shared.module";
import { CopyrightsComponent } from './footer/copyrights/copyrights.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, LogoComponent, CopyrightsComponent, FooterNavComponent],
  imports: [
    SharedModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
