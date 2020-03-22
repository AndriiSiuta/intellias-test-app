import {
  ChangeDetectionStrategy,
  Component,
  Inject
} from '@angular/core';
import {
  combineLatest,
  Observable
} from 'rxjs';
import {
  IUsersEntity,
  UsersService
} from '../../users.service';
import { Router } from '@angular/router';
import { BREAKPOINT_OBSERVER_TOKEN } from '../../../common/breakpoint-observer';
import { map } from 'rxjs/operators';

@Component({
  selector       : 'users-container',
  templateUrl    : './users.container.html',
  styleUrls      : ['./users.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersContainer {
  state$: Observable<{ users: IUsersEntity[], isTablet: boolean }>;

  constructor(
    private userService: UsersService,
    @Inject(BREAKPOINT_OBSERVER_TOKEN) private isTablet$: Observable<boolean>,
    private router: Router
  ) {
    this.state$ = combineLatest([
      this.userService.getUsers(),
      this.isTablet$
    ]).pipe(map(([users, isTablet]) => ({
      users,
      isTablet
    })));
  }

  handleClick(user: IUsersEntity) {
    this.router.navigate(['/main/users/list', {
      outlets: {
        modal: ['details']
      }
    }], {
      queryParams: { userId: `${user.id}` }
    })
  }
}
