import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { Router } from '@angular/router';

export interface IUser {
  username: string,
  password: string
}

interface IAuthenticationService {
  isUserLoggedIn(): boolean,

  login(user: IUser): void,

  logout(): void

  getUser(): Observable<IUser>
}


@Injectable({ providedIn: 'root' })

export class AuthenticationService implements IAuthenticationService {
  private userSubject$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  USER_KEY = 'user';

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  login(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject$.next(user);
    this.router.navigate(['']);
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.userSubject$.next(null);
    this.router.navigate(['/auth']);
  }

  getUser(): Observable<IUser> {
    return this.userSubject$.asObservable();
  }

  constructor(
    private router: Router
  ) {
  }
}
