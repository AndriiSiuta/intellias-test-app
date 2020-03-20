import { NgModule } from '@angular/core';
import { AuthenticationContainer } from './containers/authentication.container';
import { AuthenticationFormComponent } from './dummies/authentication-form.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [AuthenticationRoutingModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AuthenticationContainer, AuthenticationFormComponent]
})

export class AuthenticationModule {
}
