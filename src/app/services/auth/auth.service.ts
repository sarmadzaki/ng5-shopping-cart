import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  userData: any[] = [];
  isValid: boolean = false;
  constructor(public route: Router) { }
  register(data) {
    console.log('register', data)
    this.userData.push(data);
  }
  login(data) {
    let registeredUser = this.userData.filter((res, i) => {
      if (data.value.email == res.email) {
        this.isValid = !this.isValid;
      }
      else {
        this.isValid = false;
      }
    });[0]
    console.log(registeredUser, this.isValid);
  }

  ValidateEmail(user) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.value.email)) return true
    return false;
  }

}
