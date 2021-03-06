import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
@Injectable()
export class  CartService {
  itemsCount: number;
  price: number;
  items = new BehaviorSubject<any>({ item: 0, price: 0 });
  checkout: any;
  /*  totalPrice = new BehaviorSubject<number>(0);
   selectCount = new BehaviorSubject<number>(0); */
  constructor() {
    this.itemsCount = 0;
  }

  addToCart(index, price) {
    this.itemsCount = 1;
    this.items.next({ item: this.itemsCount, price: price })
  }
removeFromCart() {

}
}
