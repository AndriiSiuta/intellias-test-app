import { NgModule } from '@angular/core';
import { HomeContainer } from './containers/home.container';
import { HomeComponent } from './dummies/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports     : [HomeRoutingModule],
  declarations: [HomeContainer, HomeComponent],
})

export class HomeModule {
}
