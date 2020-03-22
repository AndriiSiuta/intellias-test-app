import {
  ChangeDetectionStrategy,
  Component,
  Inject
} from '@angular/core';
import {
  IPostsEntity,
  PostsService
} from '../../posts.service';
import {
  combineLatest,
  Observable
} from 'rxjs';
import {
  IUsersEntity,
  UsersService
} from '../../../users/users.service';
import { map } from 'rxjs/operators';
import { BREAKPOINT_OBSERVER_TOKEN } from '../../../common/breakpoint-observer';
import { Router } from '@angular/router';

@Component({
  selector       : 'posts-container',
  templateUrl    : './posts.container.html',
  styleUrls      : ['./posts.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsContainer {

  state$: Observable<{ users: IUsersEntity[], posts: IPostsEntity[], isTablet }>;

  handleClick(post: IPostsEntity): void {
    this.router.navigate(['/main/posts/list', {
      outlets: {
        modal: ['details']
      }
    }], {
      queryParams: { postId: `${post.id}` }
    })
  }

  handleAddPost() {
    this.router.navigate(['/main/posts/list', {
      outlets: {
        modal: ['create-post']
      }
    }])
  }

  handleDeletePost(postId: number) {
    this.postsService.deletePost(postId);
  }

  handleUserClick(userId: number) {
    this.router.navigate(['/main/users/list', {
      outlets: {
        modal: ['details']
      }
    }], {
      queryParams: { userId }
    })
  }

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private router: Router,
    @Inject(BREAKPOINT_OBSERVER_TOKEN) private isTablet: Observable<boolean>
  ) {
    this.postsService.loadPosts();

    this.state$ = combineLatest([
      this.usersService.getUsers(),
      this.postsService.getPosts(),
      this.isTablet,
    ]).pipe(
      map(([users, posts, isTablet]) => ({
        users,
        posts,
        isTablet,
      }))
    )
  }
}
