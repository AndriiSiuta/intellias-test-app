import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainer } from './containers/home.container';

const routes: Routes = [{
  path     : '',
  component: HomeContainer
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
