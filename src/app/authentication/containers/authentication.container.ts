import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector       : 'authentication-container',
  templateUrl    : './authentication.container.html',
  styleUrls      : ['./authentication.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationContainer {

}
