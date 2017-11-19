import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable()
export class AuthService {
  userData: any[] = [];
  constructor(public route: Router) { }
  register(data) {
    console.log('register', data)
    this.userData.push(data);
  }
  login(data) {
    this.userData.filter((res) => {
      if (res.email === data.email) {
        return data.email
      } return false; 
    })
  }
  ValidateEmail(user) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.value.email)) return true
    return false;
  }
}
