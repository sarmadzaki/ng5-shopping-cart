import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CartService } from '../../services/cartService/cart.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data;
  constructor(public product: ProductService, public cart: CartService) { }
  ngOnInit() {
    this.product.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

  addCart(index, price) {
    this.cart.addToCart(index, price);
  }
}
