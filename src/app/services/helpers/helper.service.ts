import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() { }


  setItem(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  }
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}