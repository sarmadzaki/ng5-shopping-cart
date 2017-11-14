import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
@Injectable()
export class ProductService {

  constructor(private http: Http) { }
  getData() {
    // this.http.get("../../../assets/product.json")
    //   .map((res) => {
    //     res.json()
    //       .map((item) => {
    //         console.log('somethoin===ing==')
    //       })
    //   })
  }

}
