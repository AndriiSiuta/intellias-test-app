import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  AuthenticationService,
  IUser
} from '../authentication.service';

@Component({
  selector       : 'authentication-container',
  templateUrl    : './authentication.container.html',
  styleUrls      : ['./authentication.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationContainer {
  handleSubmit(user: IUser) {
    this.authService.login(user);
  }

  constructor(
    private authService: AuthenticationService
  ) {
  }
}
