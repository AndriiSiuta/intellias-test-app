import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { DropdownService } from '../../../common/dropdown.service';
import { CreatePostFormComponent } from '../../dummies/create-post-form/create-post-form.component';
import {
  IPostsEntity,
  PostsService
} from '../../posts.service';

@Component({
  selector       : 'create-post-form-container',
  templateUrl    : './create-post-form.container.html',
  styleUrls      : ['./create-post-form.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreatePostFormContainer implements OnInit {
  @ViewChild('tpl', { static: true }) private modalTemplate: TemplateRef<CreatePostFormComponent>;
  overlayRef: OverlayRef;

  ngOnInit(): void {
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

  handleSubmit(formValue: IPostsEntity): void {
    this.postsService.addPost(formValue);
    this.closeModal();
  }

  constructor(
    private dropdownService: DropdownService,
    private vCr: ViewContainerRef,
    private postsService: PostsService
  ) {
  }
}
