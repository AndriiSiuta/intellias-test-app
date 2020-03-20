import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector       : 'authentication-form',
  templateUrl    : './authentication-form.component.html',
  styleUrls      : ['./authentication-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationFormComponent {

}
