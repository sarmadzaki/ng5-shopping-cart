import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  totalItems: any = 0;
  totalPrice: any = 0;
  constructor(public cart: CartService) {
    this.cart.items.subscribe(res => {
      this.totalItems = this.totalItems + res.item;
      this.totalPrice = this.totalPrice + res.price;
      console.log(res)
      console.log(this.totalPrice)
      console.log(this.totalItems)
    })
    /* this.cart.selectCount.subscribe(res => this.itemsSelected = res);
    this.cart.totalPrice.subscribe(res => {this.price = res}); */
  }
  ngOnInit() {
  }
}
