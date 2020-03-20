import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from '../authentication.service';

@Component({
  selector       : 'auth-form',
  templateUrl    : './authentication-form.component.html',
  styleUrls      : ['./authentication-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationFormComponent {
  loginForm;

  @Output() submitClick = new EventEmitter<IUser>();

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  onSubmit(formValue: IUser): void {
    this.submitClick.next(formValue);
  }
}
