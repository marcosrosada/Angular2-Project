import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user.name = 'marcosrosada';
    this.user.password = '123123';
  }

  doLogin(user: User) {
    this.authService.doLogin(this.user);
  }

}
