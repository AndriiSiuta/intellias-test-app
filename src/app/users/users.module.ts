import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersContainer } from './containers/users-list/users.container';
import { UsersComponent } from './dummies/users-list/users.component';
import { CommonModule } from '@angular/common';
import { UserDetailsContainer } from './containers/user-detail/user-details.container';
import { UserDetailsComponent } from './dummies/user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [UsersRoutingModule, CommonModule, MatCardModule],
  declarations: [UsersContainer, UsersComponent, UserDetailsContainer, UserDetailsComponent]
})

export class UsersModule {
}
