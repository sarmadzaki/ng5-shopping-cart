import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router'
import { HelperService } from '../../../services/helpers/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isValid: boolean = false;
  constructor(public auth: AuthService, public route: Router, public helper: HelperService) { }

  ngOnInit() {
  }
  register(user) {
    // console.log(user)
    if (!this.auth.ValidateEmail(user)) return this.isValid = true;
    if (!user.valid) return this.isValid = !this.isValid;
    this.isValid = !this.isValid;
    this.auth.register(user.value);
    this.route.navigate(['/login']);
  }

}
