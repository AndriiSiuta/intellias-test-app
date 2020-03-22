import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { MainContainer } from './main.container';

const routes: Routes = [{
  path      : '',
  pathMatch : 'full',
  redirectTo: '/users',
}, {
  path     : '',
  component: MainContainer,
  children : [{
    path        : 'users',
    loadChildren: () => import('../users/users.module').then((module) => module.UsersModule)
  }, {
    path        : 'posts',
    loadChildren: () => import('../posts/posts.module').then((module) => module.PostsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
