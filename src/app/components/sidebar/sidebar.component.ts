import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service'
import { RouterLink, Router } from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  totalItems: any = 0;
  totalPrice: any = 0;
  isEnabled: boolean = false;
  constructor(public cart: CartService, public router: Router) {
    this.cart.items.subscribe(res => {
      this.totalItems = this.totalItems + res.item;
      this.totalPrice = this.totalPrice + res.price;
      this.proceedToCheckout();
    })
    /* this.cart.selectCount.subscribe(res => this.itemsSelected = res);
    this.cart.totalPrice.subscribe(res => {this.price = res}); */
  }
  ngOnInit() {
  }
  proceedToCheckout() {
    if (this.totalItems !== 0) {
      this.isEnabled = true;
    }
  }
}
