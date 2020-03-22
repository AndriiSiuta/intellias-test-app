import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { IUsersEntity } from '../../users.service';

@Component({
  selector       : 'user-details',
  templateUrl    : './user-details.component.html',
  styleUrls      : ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnDestroy {
  @Input() user: IUsersEntity;
  @HostBinding('class.mat-elevation-z10') isElevation = false;

  constructor(
    private router: Router
  ) {
    this.isElevation = true;
  }

  ngOnDestroy(): void {
    this.router.navigate(['/main/users']);
  }
}
