import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  AuthenticationService,
  IUser
} from '../../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector       : 'home-container',
  templateUrl    : './home.container.html',
  styleUrls      : ['./home.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeContainer {
  user: IUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.user = this.authenticationService.getUser();
  }

  onNavigateClick(): void {
    this.router.navigate(['/main/posts'])
  }
}
