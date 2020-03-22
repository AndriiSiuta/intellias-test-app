import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PostsContainer } from './containers/posts-lists/posts.container';
import { PostsDetailsContainer } from './containers/posts-details/posts-details.container';
import { CreatePostFormContainer } from './containers/create-post-form/create-post-form.container';

const routes: Routes = [{
  path      : '',
  pathMatch : 'full',
  redirectTo: 'list',
}, {
  path     : 'list',
  component: PostsContainer,
  children : [{
    path     : 'details',
    component: PostsDetailsContainer,
    outlet   : 'modal'
  }, {
    path     : 'create-post',
    outlet   : 'modal',
    component: CreatePostFormContainer
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {
}
