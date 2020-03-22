import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { IPostsEntity } from '../../posts.service';
import { Router } from '@angular/router';

@Component({
  selector       : 'posts-details',
  templateUrl    : './posts-details.component.html',
  styleUrls      : ['./posts-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsDetailsComponent implements OnInit, OnDestroy {
  @Input() post: IPostsEntity;

  @HostBinding('class.mat-elevation-z10') isElevation = false;

  constructor(
    private router: Router
  ) {
    this.isElevation = true;
  }

  ngOnDestroy(): void {
    this.router.navigate(['/main/posts']);
  }

  ngOnInit(): void {
  }

}
