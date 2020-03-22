import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { UsersContainer } from './containers/users-list/users.container';
import { UserDetailsContainer } from './containers/user-detail/user-details.container';

const routes: Routes = [{
  path      : '',
  pathMatch : 'full',
  redirectTo: 'list'
}, {
  path     : 'list',
  component: UsersContainer,
  children : [{
    path     : 'details',
    outlet   : 'modal',
    component: UserDetailsContainer
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
