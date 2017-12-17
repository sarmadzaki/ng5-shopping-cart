import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CartService } from '../../services/cartService/cart.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data;
  searchTerm: string;
  acs: string;
  isSort: boolean = true;
  isSearch: boolean = true;
  constructor(public product: ProductService, public cart: CartService, public route: Router) { }
  ngOnInit() {
    this.product.getData().subscribe(data => {
      this.data = data;
      this.product.data = data;
    });
  }
  addCart(index, price) {
    this.cart.addToCart(index, price);
  }
  onSearch(value) {
    console.log('instance', value);
  }
  sorting() {
    this.isSort = !this.isSort;
  }
  detailsPage(name) {
    this.route.navigate(['details', name])
  }
  
}
