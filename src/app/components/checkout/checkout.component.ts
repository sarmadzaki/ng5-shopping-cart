
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsCount: number;
  priceCount: number;
  constructor(
    public cart: CartService
  ) {
  }
  ngOnInit() {
    this.itemsCount = this.cart.checkout.items;
    this.priceCount = this.cart.checkout.price;
  }

}

