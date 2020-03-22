import { NgModule } from '@angular/core';
import { MainContainer } from './main.container';
import { MainRoutingModule } from './main-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MainRoutingModule, MatSidenavModule, MatListModule, MatIconModule, CommonModule, MatButtonModule],
  declarations: [MainContainer]
})

export class MainModule {
}
