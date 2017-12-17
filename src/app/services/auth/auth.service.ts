import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import {HelperService} from '../helpers/helper.service'
@Injectable()
export class AuthService {
  userData: any[] = [];
  isValid: boolean = false;
  constructor(public route: Router,public helper: HelperService) { }
  register(data) {
    console.log('register', data)
    this.userData.push(data);
    this.helper.setItem('userData', this.userData);
  }
  login(data) {
    let userData = this.helper.getItem('userData');
    userData.filter((res, i) => {
      if (data.value.email == res.email) {
        this.isValid = !this.isValid;
      }
      else {
        this.isValid = false;
      }
    });[0]
  }

  ValidateEmail(user) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.value.email)) return true
    return false;
  }

}
