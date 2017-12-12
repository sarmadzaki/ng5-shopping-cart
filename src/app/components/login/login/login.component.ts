import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid: boolean = false;
  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit() {
  }
  login(user) {
    this.auth.login(user);
    if (this.auth.isValid) {
      this.route.navigate(['']);
    } else {
      this.isValid = true;
    }

  }
}
