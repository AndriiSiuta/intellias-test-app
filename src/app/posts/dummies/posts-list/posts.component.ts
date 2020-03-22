import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { IPostsEntity } from '../../posts.service';
import { IUsersEntity } from '../../../users/users.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector       : 'posts',
  templateUrl    : './posts.component.html',
  styleUrls      : ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  @Input() posts: IPostsEntity[];
  @Input() users: IUsersEntity[];
  @Input() isTablet: boolean;

  @Output() toModalClick = new EventEmitter<IPostsEntity>();
  @Output() addPostClick = new EventEmitter();
  @Output() deletePostClick = new EventEmitter<number>();
  @Output() userNavigateClick = new EventEmitter<number>();

  createPostClick(): void {
    this.addPostClick.next();
  }

  onClick(post: IPostsEntity): void {
    this.toModalClick.next(post);
  }

  isMyPost(post: IPostsEntity) {
    return post.userId === 0;
  }

  onDeleteClick(id: number) {
    this.deletePostClick.next(id);
  }

  navigateToUserClick(userId: number): void {
    this.userNavigateClick.next(userId);
  }

  get isUserLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  trackByFn(index) {
    return index;
  }

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }
}
