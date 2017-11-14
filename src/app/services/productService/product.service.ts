import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class ProductService {
  data: any;
  constructor(private http: HttpClient) {
    this.getData();
  }
  getData() {
    return this.http.get('../../../assets/product.json')
  };
}
