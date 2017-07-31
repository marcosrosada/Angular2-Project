import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user';

@Injectable()
export class AuthService {

  private userAuthenticated: boolean = false;

  showHeader = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    if (user.name === 'marcosrosada' && user.password === '123123') {
      this.userAuthenticated = true;
      this.showHeader.emit(true);

      this.router.navigate(['/']);
    }
    else {
      this.userAuthenticated = false;
      this.showHeader.emit(false);
    }
  }

}
