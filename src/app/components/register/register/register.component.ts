import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isValid: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  register(user) {
    if(!user.valid) return this.isValid = !this.isValid;
    this.isValid = !this.isValid;
    this.auth.register(user.value);
  }
}
