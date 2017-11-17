import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  login(user) {
    if(!user.valid) return this.isValid = !this.isValid;
    this.isValid = !this.isValid;
    this.auth.login(user.value);
  }
}
