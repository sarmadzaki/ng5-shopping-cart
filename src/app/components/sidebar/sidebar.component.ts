import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service'
import { RouterLink, Router } from '@angular/router';
import {HelperService} from '../../services/helpers/helper.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  totalItems: any = 0;
  totalPrice: any = 0;
  isEnabled: boolean = false;
  constructor(public cart: CartService, public router: Router, public helper: HelperService) { }

  ngOnInit() {
    this.cart.items.subscribe(res => {
      this.totalItems = this.totalItems + res.item;
      this.totalPrice = this.totalPrice + res.price;
      this.proceedToCheckout();
    })
  }
  route() {
    console.log(this.totalItems, this.totalPrice)
    this.cart.checkout = { items: this.totalItems, price: this.totalPrice }
    console.log(this.helper.getItem('userData'));
    if(this.helper.getItem('userData')) {
      this.router.navigate(['/checkout']);
    }
    else{
      console.log('please login first');
    }
  }

  proceedToCheckout() {
    if (this.totalItems !== 0) {
      this.isEnabled = true;
    }
  }
  clearCart() {
    this.totalItems = null;
    this.totalPrice = null;
  }
}
