import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/landing/views/home/home.component';
import {PressReleasesComponent} from './features/landing/views/press-releases/press-releases.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    breadcrumb: [],
  }
}, {
  path: 'press-releases',
  component: PressReleasesComponent,
  data: {
    breadcrumb: ['home', 'media center', 'press releases'],
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
