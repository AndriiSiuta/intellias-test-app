import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface IUser {
  username: string,
  password?: string
  uniqueId?: string;
}

interface IAuthenticationService {
  isUserLoggedIn(): boolean,

  login(user: IUser): void,

  logout(): void

  getUser(): IUser
}


@Injectable({ providedIn: 'root' })

export class AuthenticationService implements IAuthenticationService {
  USER_KEY = 'user';

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  login(user: IUser): void {
    // hard code id for this case
    localStorage.setItem(this.USER_KEY, JSON.stringify({
      ...user,
      uniqueId: 0
    }));
    this.router.navigate(['']);
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/auth']);
  }

  getUser(): IUser {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }

  constructor(
    private router: Router
  ) {
  }
}
