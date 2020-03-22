import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { UserDetailsComponent } from '../../dummies/user-details/user-details.component';
import { DropdownService } from '../../../common/dropdown.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IUsersEntity,
  UsersService
} from '../../users.service';
import { map } from 'rxjs/operators';

@Component({
  selector       : 'user-detail-container',
  templateUrl    : './user-details.container.html',
  styleUrls      : ['./user-details.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailsContainer implements OnInit {
  @ViewChild('tpl', { static: true }) private modalTemplate: TemplateRef<UserDetailsComponent>;
  overlayRef: OverlayRef;
  user$: Observable<IUsersEntity>;

  ngOnInit() {
    this.user$ = this.usersService.getUsers().pipe(
      map((users) => {
        return users.find((
          user
        ) => user.id === +this.route.snapshot.queryParamMap.get('userId'));
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
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
  }
}
