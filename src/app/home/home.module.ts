import { NgModule } from '@angular/core';
import { HomeContainer } from './containers/home.container';
import { HomeComponent } from './dummies/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [HomeRoutingModule, CommonModule, MatCardModule, MatButtonModule],
  declarations: [HomeContainer, HomeComponent],
})

export class HomeModule {
}
