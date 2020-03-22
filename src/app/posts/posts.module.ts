import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsContainer } from './containers/posts-lists/posts.container';
import { PostsComponent } from './dummies/posts-list/posts.component';
import { CommonModule } from '@angular/common';
import { GetAuthorPipe } from './get-author.pipe';
import { MatCardModule } from '@angular/material/card';
import { PostsDetailsComponent } from './dummies/posts-details/posts-details.component';
import { PostsDetailsContainer } from './containers/posts-details/posts-details.container';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreatePostFormComponent } from './dummies/create-post-form/create-post-form.component';
import { CreatePostFormContainer } from './containers/create-post-form/create-post-form.container';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [PostsRoutingModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  declarations: [
    PostsContainer,
    PostsComponent,
    GetAuthorPipe,
    PostsDetailsContainer,
    PostsDetailsComponent,
    CreatePostFormContainer,
    CreatePostFormComponent
  ]
})

export class PostsModule {
}
