import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { CartService } from '../../services/cartService/cart.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
itemsCount: number = 0;
priceCount: number = 0;
  constructor(public route: ActivatedRoute, public cart: CartService ) { 
    this.cart.items.subscribe(res => {
      console.log(res);
    })
  }
  ngOnInit() {
  }
}

