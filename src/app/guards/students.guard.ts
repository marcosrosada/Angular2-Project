import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';


@Injectable()
export class StudentsGuard implements CanActivateChild {

  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    console.log(route);
    console.log(state);

    if (state.url.includes('students')) {
      alert('Not allowed');
      return false;
    }
    return true;
  }

}
