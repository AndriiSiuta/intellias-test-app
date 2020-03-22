import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';
import {
  AuthenticationService,
  IUser
} from '../authentication/authentication.service';
import { BREAKPOINT_OBSERVER_TOKEN } from '../common/breakpoint-observer';
import {
  Observable,
  Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector       : 'main-container',
  templateUrl    : './main.container.html',
  styleUrls      : ['./main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainContainer implements OnDestroy {
  isExpanded = false;
  user: IUser = {
    username: 'Unknown',
  };

  isTablet: boolean;
  private destroyed$ = new Subject();

  constructor(
    private authenticationService: AuthenticationService,
    private cDr: ChangeDetectorRef,
    @Inject(BREAKPOINT_OBSERVER_TOKEN) public isTablet$: Observable<boolean>
  ) {
    this.isTablet$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((value) => {
      this.isTablet = value;
      this.cDr.markForCheck();
    });

    if (this.isUserLoggedIn) {
      this.user = this.authenticationService.getUser();
    }
  }

  get isUserLoggedIn() {
    return this.authenticationService.isUserLoggedIn();
  }

  get mode() {
    return this.isTablet ? 'over' : 'side';
  }

  get opened() {
    return !this.isTablet;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
