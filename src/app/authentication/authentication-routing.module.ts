import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AuthenticationContainer } from './containers/authentication.container';


const routes: Routes = [{
  path     : '',
  component: AuthenticationContainer
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule {
}
