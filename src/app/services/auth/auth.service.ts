import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable()
export class AuthService {
  userData: any[] =[];
  constructor(public route: Router) { }
  register(data) {
    console.log('register', data)
    this.userData.push(data);
    this.route.navigate(['/login']);
  }
  login(data) {
    console.log('login', data.email);
    
  }
}
