import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { PostsDetailsComponent } from '../../dummies/posts-details/posts-details.component';
import { OverlayRef } from '@angular/cdk/overlay';
import { DropdownService } from '../../../common/dropdown.service';
import {
  IPostsEntity,
  PostsService
} from '../../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector       : 'posts-details-container',
  templateUrl    : './posts-details.container.html',
  styleUrls      : ['./posts-details.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsDetailsContainer implements OnInit, OnDestroy {
  @ViewChild('tpl', { static: true }) private modalTemplate: TemplateRef<PostsDetailsComponent>;
  overlayRef: OverlayRef;
  post$: Observable<IPostsEntity>;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.post$ = this.postsService.getPosts().pipe(
      map((posts) => {
        return posts.find((
          post
        ) => post.id === +this.route.snapshot.queryParamMap.get('postId'))
      })
    );

    this.closeModal();

    this.overlayRef = this.dropdownService.open({
      isModal     : true,
      containerRef: this.vCr,
      template    : this.modalTemplate
    })
  }

  closeModal() {
    if (this.isOpen) {
      return this.overlayRef.dispose();
    }
  }

  get isOpen() {
    return this.overlayRef && this.overlayRef.hasAttached();
  }

  constructor(
    private dropdownService: DropdownService,
    private vCr: ViewContainerRef,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
  }
}
