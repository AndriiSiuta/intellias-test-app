import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { IPostsEntity } from '../../posts.service';

@Component({
  selector       : 'create-post-form',
  templateUrl    : './create-post-form.component.html',
  styleUrls      : ['./create-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostFormComponent implements OnInit, OnDestroy {
  @HostBinding('class.mat-elevation-z10') isElevation = false;
  @Output() submitClick = new EventEmitter<IPostsEntity>();
  createPostForm;

  handleSubmit(form: IPostsEntity) {
    this.submitClick.next(form);
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.isElevation = true;
    this.createPostForm = this.formBuilder.group({
      title : '',
      body  : '',
      userId: ''
    })
  }

  ngOnDestroy(): void {
    this.router.navigate(['/main/posts']);
  }

  ngOnInit(): void {
    // bad approach, better to add input with id
    this.createPostForm.controls['userId'].setValue(this.authenticationService.getUser().uniqueId);
  }

}
